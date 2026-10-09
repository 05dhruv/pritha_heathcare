"use client";

import { useState, useMemo, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import emailjs from "@emailjs/browser";
import { QRCodeSVG } from "qrcode.react";

// EmailJS Configuration
const EMAILJS_CONFIG = {
  SERVICE_ID: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_gmail",
  TEMPLATE_ADMIN: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ADMIN || "template_admin",
  TEMPLATE_USER: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_USER || "template_user",
  PUBLIC_KEY: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "YOUR_PUBLIC_KEY",
};

const UPI_ID = "pritha@indianbk";
const PAYEE_NAME = "Pratha Healthcare";
const PRESETS = [500, 1000, 2500, 5000];
const CAUSES = ["For Cataract Surgery", "Eye Camp", "Tabacco Suggestion Awareness Program","oral cancer patient rehabilitation","Artificial Limbs", "For Education To Child"];

export default function Donate() {
  const [amount, setAmount] = useState(1000);
  const [form, setForm] = useState({ name: "", email: "", phone: "", pan: "" });
  const [cause, setCause] = useState("For Cataract Surgery");
  const [errors, setErrors] = useState({});

  // Payment popup & progress states
  const [showQRPopup, setShowQRPopup] = useState(false);
  const [progress, setProgress] = useState(0); // 0 to 100
  const [isRunning, setIsRunning] = useState(false);
  const [showVerificationPopup, setShowVerificationPopup] = useState(false);
  const [emailStatus, setEmailStatus] = useState({ sent: false, error: false });
  const [donorDetails, setDonorDetails] = useState(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Lock body scroll when any popup is active
  useEffect(() => {
    if (showQRPopup || showVerificationPopup) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [showQRPopup, showVerificationPopup]);

  // Guard against double sending emails per donation
  const hasSentEmailRef = useRef(false);

  const amt = Number(amount);
  const validAmount = !isNaN(amt) && amt >= 1;

  // Generate dynamic UPI pay link
  const upiLink = useMemo(() => {
    if (!validAmount) return "";
    const params = new URLSearchParams({
      pa: UPI_ID,
      pn: PAYEE_NAME,
      am: amt.toFixed(2),
      cu: "INR",
      tn: `Donation ${cause}`,
    });
    return `upi://pay?${params.toString()}`;
  }, [amt, cause, validAmount]);

  // Cancel timer and close popup if amount or cause changes while running
  const handleAmountChange = (newAmount) => {
    setAmount(newAmount);
    if (showQRPopup || isRunning) {
      handleCloseQRPopup();
    }
  };

  const handleCauseChange = (newCause) => {
    setCause(newCause);
    if (showQRPopup || isRunning) {
      handleCloseQRPopup();
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) {
      newErrors.name = "Please enter your full name.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!form.email.trim()) {
      newErrors.email = "Please enter your email address.";
    } else if (!emailRegex.test(form.email.trim())) {
      newErrors.email = "Please enter a valid email address.";
    }

    const phoneRegex = /^[0-9+\s-]{10,15}$/;
    if (!form.phone.trim()) {
      newErrors.phone = "Please enter your phone number.";
    } else if (!phoneRegex.test(form.phone.trim().replace(/\s+/g, ""))) {
      newErrors.phone = "Please enter a valid phone number (10 digits).";
    }

    if (!validAmount) {
      newErrors.amount = "Donation amount must be at least ₹1.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleDonate = () => {
    if (!validate()) return;

    hasSentEmailRef.current = false;
    setEmailStatus({ sent: false, error: false });
    setProgress(0);
    setShowVerificationPopup(false);
    setShowQRPopup(true);
    setIsRunning(true);
  };

  // 20-second progress bar (0 to 100%)
  useEffect(() => {
    if (!isRunning) return;

    const totalDuration = 20000; // 20 seconds
    const intervalTime = 100; // update every 100ms
    const step = (intervalTime / totalDuration) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + step;
        if (next >= 100) {
          clearInterval(timer);
          return 100;
        }
        return next;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [isRunning]);

  // When progress hits 100%: close QR popup, open verification notice popup, and send emails
  useEffect(() => {
    if (progress >= 100 && isRunning) {
      setIsRunning(false);
      setShowQRPopup(false);

      const donationSnapshot = {
        name: form.name.trim(),
        email: form.email.trim(),
        amount: amt,
        cause: cause,
        phone: form.phone.trim(),
        time: new Date().toLocaleString("en-IN", {
          dateStyle: "medium",
          timeStyle: "short",
        }),
      };

      setDonorDetails(donationSnapshot);
      setShowVerificationPopup(true);

      if (!hasSentEmailRef.current) {
        hasSentEmailRef.current = true;
        sendDonationEmails(donationSnapshot);
      }
    }
  }, [progress, isRunning, form, amt, cause]);

  const sendDonationEmails = async (data) => {
    const adminTemplateParams = {
      user_name: data.name,
      user_email: data.email,
      to_email: "prithahealthcare@gmail.com",
      reply_to: data.email,
      user_phone: data.phone,
      amount: data.amount,
      cause: data.cause,
      time: data.time,
    };

    const userTemplateParams = {
      user_name: data.name,
      user_email: data.email,
      to_email: data.email,
      reply_to: "prithahealthcare@gmail.com",
      amount: data.amount,
      cause: data.cause,
      time: data.time,
    };

    try {
      const results = await Promise.allSettled([
        emailjs.send(
          EMAILJS_CONFIG.SERVICE_ID,
          EMAILJS_CONFIG.TEMPLATE_ADMIN,
          adminTemplateParams,
          EMAILJS_CONFIG.PUBLIC_KEY
        ),
        emailjs.send(
          EMAILJS_CONFIG.SERVICE_ID,
          EMAILJS_CONFIG.TEMPLATE_USER,
          userTemplateParams,
          EMAILJS_CONFIG.PUBLIC_KEY
        ),
      ]);

      const hasFailures = results.some((res) => res.status === "rejected");
      if (hasFailures) {
        console.error("One or more emails failed to send:", results);
        setEmailStatus({ sent: true, error: true });
      } else {
        setEmailStatus({ sent: true, error: false });
      }
    } catch (err) {
      console.error("EmailJS sending error:", err);
      setEmailStatus({ sent: true, error: true });
    }
  };

  const handleCloseQRPopup = () => {
    setShowQRPopup(false);
    setIsRunning(false);
    setProgress(0);
    hasSentEmailRef.current = false;
  };

  const handleCloseVerificationPopup = () => {
    setShowVerificationPopup(false);
    setProgress(0);
    setIsRunning(false);
    setShowQRPopup(false);
    setForm({ name: "", email: "", phone: "", pan: "" });
    setErrors({});
    hasSentEmailRef.current = false;
    setEmailStatus({ sent: false, error: false });
  };

  return (
    <div className="relative">
      {/* Preset and Custom Amount */}
      <div className="mb-5">
        <label className="label">Select Donation Amount (INR)</label>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-3">
          {PRESETS.map((v) => (
            <button
              key={v}
              type="button"
              className={`rounded-xl border py-2.5 px-3 font-bold text-sm sm:text-base transition active:scale-95 ${
                amt === v && !errors.amount
                  ? "border-[#dc2626] bg-[#dc2626] text-white shadow-sm ring-2 ring-red-500/20"
                  : "border-slate-300 bg-white text-slate-700 hover:bg-slate-50"
              }`}
              onClick={() => handleAmountChange(v)}
            >
              ₹{v.toLocaleString("en-IN")}
            </button>
          ))}
        </div>
        <div className="relative">
          <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 font-bold text-sm">
            ₹
          </span>
          <input
            type="number"
            min="1"
            placeholder="Enter Custom Amount"
            value={amount}
            onChange={(e) => handleAmountChange(e.target.value)}
            className="field !pl-8"
          />
        </div>
        {errors.amount && (
          <p className="mt-1 text-xs text-red-600 font-medium">{errors.amount}</p>
        )}
      </div>

      {/* Donor Form Fields */}
      <div className="grid gap-3.5 sm:gap-4 sm:grid-cols-2">
        <div>
          <label className="label" htmlFor="don-name">Full name *</label>
          <input
            id="don-name"
            name="name"
            placeholder="Full name"
            value={form.name}
            onChange={handleChange}
            className={`field ${errors.name ? "!border-red-500 bg-red-50/20" : ""}`}
          />
          {errors.name && (
            <p className="mt-1 text-xs text-red-600 font-medium">{errors.name}</p>
          )}
        </div>

        <div>
          <label className="label" htmlFor="don-email">Email *</label>
          <input
            id="don-email"
            name="email"
            type="email"
            placeholder="Email address"
            value={form.email}
            onChange={handleChange}
            className={`field ${errors.email ? "!border-red-500 bg-red-50/20" : ""}`}
          />
          {errors.email && (
            <p className="mt-1 text-xs text-red-600 font-medium">{errors.email}</p>
          )}
        </div>

        <div>
          <label className="label" htmlFor="don-phone">Phone *</label>
          <input
            id="don-phone"
            name="phone"
            placeholder="10-digit mobile number"
            value={form.phone}
            onChange={handleChange}
            className={`field ${errors.phone ? "!border-red-500 bg-red-50/20" : ""}`}
          />
          {errors.phone && (
            <p className="mt-1 text-xs text-red-600 font-medium">{errors.phone}</p>
          )}
        </div>

        <div>
          <label className="label" htmlFor="don-pan">PAN (for 80G Tax Receipt - optional)</label>
          <input
            id="don-pan"
            name="pan"
            placeholder="ABCDE1234F"
            maxLength={10}
            value={form.pan}
            onChange={handleChange}
            className="field uppercase"
          />
        </div>
      </div>

      {/* Cause Dropdown */}
      <div className="mt-4">
        <label className="label" htmlFor="don-cause">I want to support</label>
        <select
          id="don-cause"
          value={cause}
          onChange={(e) => handleCauseChange(e.target.value)}
          className="field"
        >
          {CAUSES.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
      </div>

      {/* Submit / Donate Button */}
      <div className="mt-6">
        <button
          type="button"
          onClick={handleDonate}
          disabled={isRunning || !validAmount}
          className={`btn w-full sm:w-auto font-bold !py-3 text-base shadow-lg shadow-red-900/20 ${
            isRunning ? "opacity-60 cursor-not-allowed" : ""
          }`}
        >
          {isRunning ? "Processing..." : `Donate ₹${validAmount ? amt.toLocaleString("en-IN") : 0} & Support`}
        </button>
      </div>

      {/* 1. Dynamic QR in Full-screen POP-UP Modal with 20s Progress Bar (Rendered to document.body) */}
      {mounted && showQRPopup && createPortal(
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/80 p-3 sm:p-4 backdrop-blur-md transition-all overflow-y-auto"
        >
          <div className="relative w-full max-w-md rounded-3xl bg-white p-5 sm:p-7 text-center shadow-2xl animate-in fade-in zoom-in-95 duration-200 border border-slate-100 my-auto max-h-[92vh] overflow-y-auto">
            {/* Close Button at top right */}
            <button
              type="button"
              onClick={handleCloseQRPopup}
              className="absolute right-3.5 top-3.5 rounded-full p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-700 transition"
              aria-label="Close"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <span className="inline-block px-3 py-1 bg-amber-50 text-amber-700 text-xs font-bold rounded-full mb-2 border border-amber-200">
              UPI Instant Payment
            </span>

            <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900 mb-0.5">
              Scan to Pay ₹{amt.toLocaleString("en-IN")}
            </h3>
            <p className="text-xs text-slate-500 mb-3 font-mono">
              UPI ID: <span className="font-semibold text-slate-800">{UPI_ID}</span>
            </p>

            {/* Dynamic UPI QR Code */}
            <div className="inline-block rounded-2xl bg-white p-3 sm:p-4 shadow-md border border-slate-200/80 mb-3 max-w-full">
              <div className="w-[190px] h-[190px] sm:w-[220px] sm:h-[220px] mx-auto flex items-center justify-center">
                <QRCodeSVG value={upiLink} size={190} includeMargin level="M" className="w-full h-full" />
              </div>
            </div>

            {/* Direct UPI Mobile Link Button */}
            <div className="mb-4">
              <a
                href={upiLink}
                className="inline-flex items-center justify-center gap-1.5 w-full py-2.5 px-4 rounded-xl bg-amber-600 hover:bg-amber-700 active:scale-95 text-white font-bold text-xs sm:text-sm shadow-md transition-all"
              >
                <span>📱 Pay via UPI App (GPay / PhonePe / Paytm)</span>
              </a>
            </div>

            {/* 20-Second Progress Bar */}
            <div className="w-full rounded-2xl bg-slate-50 p-3 sm:p-4 border border-slate-100">
              <div className="flex justify-between text-xs font-semibold text-slate-700 mb-1.5">
                <span>Awaiting payment completion...</span>
                <span className="text-amber-600 font-bold">{Math.round(progress)}%</span>
              </div>
              <div className="h-2.5 w-full overflow-hidden rounded-full bg-slate-200">
                <div
                  className="h-full bg-gradient-to-r from-amber-500 to-amber-600 transition-all duration-100 ease-linear rounded-full"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <p className="mt-2 text-xs text-slate-500">
                Please complete the payment in your UPI app (20 seconds)
              </p>
            </div>
          </div>
        </div>,
        document.body
      )}

      {/* 2. Verification Pop-up Message after 20s progress (Rendered to document.body) */}
      {mounted && showVerificationPopup && createPortal(
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/80 p-4 backdrop-blur-md transition-all overflow-y-auto"
        >
          <div className="relative w-full max-w-lg rounded-2xl bg-white p-6 sm:p-8 text-center shadow-2xl animate-in fade-in zoom-in-95 duration-200 border border-slate-100 my-auto">
            {/* Header Icon */}
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 border border-emerald-100 shadow-sm">
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>

            <h3 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 mb-2">
              Donation Details Received
            </h3>

            {/* Professional English Verification Notice */}
            <p className="text-sm text-slate-600 leading-relaxed max-w-md mx-auto">
              Thank you for your generous support. We have received your donation details. Our team will verify the transaction with our bank and send the formal confirmation and 80G receipt to your registered email.
            </p>

            {/* Donation Snapshot Box */}
            {donorDetails && (
              <div className="my-5 rounded-xl border border-slate-200 bg-slate-50/80 p-4 sm:p-5 text-left text-xs sm:text-sm space-y-2.5">
                <div className="flex justify-between items-center py-1 border-b border-slate-200/60">
                  <span className="text-slate-500 font-medium">Donor Name</span>
                  <span className="font-semibold text-slate-800">{donorDetails.name}</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-slate-200/60">
                  <span className="text-slate-500 font-medium">Email Address</span>
                  <span className="font-semibold text-slate-800">{donorDetails.email}</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-slate-200/60">
                  <span className="text-slate-500 font-medium">Pledged Amount</span>
                  <span className="font-bold text-emerald-600 text-base sm:text-lg">₹{donorDetails.amount.toLocaleString("en-IN")}</span>
                </div>
                <div className="flex justify-between items-center pt-1">
                  <span className="text-slate-500 font-medium">Cause Supported</span>
                  <span className="font-semibold text-slate-700">{donorDetails.cause}</span>
                </div>
              </div>
            )}

            {/* Email send error notice if applicable */}
            {emailStatus.error && (
              <p className="mb-4 rounded-lg bg-amber-50 p-3 text-xs text-amber-800 border border-amber-200 text-center">
                Notification email could not be delivered automatically. If you need immediate assistance, please reach out to us.
              </p>
            )}

            <div className="text-xs text-slate-500 mb-5">
              Need assistance? Contact us at{" "}
              <a href="mailto:prithahealthcare@gmail.com" className="font-semibold text-amber-600 hover:text-amber-700 underline">
                prithahealthcare@gmail.com
              </a>
            </div>

            {/* Close Button */}
            <button
              type="button"
              onClick={handleCloseVerificationPopup}
              className="btn w-full !py-3 text-sm font-bold tracking-wide shadow-md hover:shadow-lg transition"
            >
              Done
            </button>
          </div>
        </div>,
        document.body
      )}
    </div>
  );
}