"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { SITE } from "@/content/site";
import QuoteMark from "./QuoteMark";
import Divider from "./dividers";

type FormData = {
  name: string;
  email: string;
  date?: string;
  message: string;
};

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path
        d="M1 7 H 12 M 7 2 L 12 7 L 7 12"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

interface FieldProps {
  label: string;
  error?: string;
  children: React.ReactNode;
}

function Field({ label, error, children }: FieldProps) {
  return (
    <label style={{ display: "block" }}>
      <span
        style={{
          display: "block",
          fontSize: 13,
          letterSpacing: ".06em",
          textTransform: "uppercase",
          color: "rgba(255,255,255,.6)",
          marginBottom: 8,
        }}
      >
        {label}
      </span>
      {children}
      {error && (
        <span
          style={{
            color: "var(--secondary)",
            fontSize: 13,
            marginTop: 6,
            display: "block",
          }}
        >
          {error}
        </span>
      )}
    </label>
  );
}

const inputStyle = (hasError: boolean): React.CSSProperties => ({
  background: "rgba(255,255,255,.06)",
  border: `1px solid ${hasError ? "var(--secondary)" : "rgba(255,255,255,.12)"}`,
  borderRadius: 8,
  color: "var(--cream-card)",
  padding: "14px",
  fontFamily: "var(--font-body)",
  fontSize: 16,
  outline: "none",
  width: "100%",
  boxSizing: "border-box",
});

export default function Contact() {
  const [sent, setSent] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<FormData>({ mode: "onBlur" });

  const firstName = watch("name")?.split(" ")[0] ?? "friend";

  // Split the headline on its first comma for the two-line / script treatment.
  // Guarded so an overridden title without a comma doesn't crash.
  const [titleHead, ...titleRest] = SITE.contact.title.split(",");
  const titleTail = titleRest.join(",").trim();

  const onSubmit = (data: FormData) => {
    console.log("[contact] submission", data);
    setSent(true);
  };

  return (
    <section
      id="contact"
      style={{
        background: "var(--bg-deep)",
        color: "var(--cream-card)",
        position: "relative",
        paddingTop: 40,
      }}
    >
      <div
        className="container section-pad contact-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1.2fr",
          gap: 80,
          alignItems: "start",
        }}
      >
        {/* left: intro */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.7, ease: "easeOut" as const }}
        >
          <span className="eyebrow" style={{ color: "var(--accent)" }}>
            {SITE.contact.eyebrow}
          </span>
          <h2
            className="h-section"
            style={{ marginTop: 18, maxWidth: "14ch" }}
          >
            {titleHead}
            {titleTail ? "," : ""}
            {titleTail && (
              <>
                <br />
                <span
                  style={{
                    fontFamily: "var(--font-script)",
                    color: "var(--accent)",
                    fontSize: "1em",
                  }}
                >
                  {titleTail}
                </span>
              </>
            )}
          </h2>
          <p
            style={{
              marginTop: 28,
              color: "rgba(255,255,255,.7)",
              fontSize: 17,
              maxWidth: "38ch",
            }}
          >
            {SITE.contact.sub}
          </p>
        </motion.div>

        {/* right: form */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.7, ease: "easeOut" as const, delay: 0.08 }}
          style={{
            background: "rgba(255,255,255,.04)",
            border: "1px solid rgba(255,255,255,.1)",
            borderRadius: 12,
            padding: 28,
          }}
        >
          {sent ? (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "40px 20px",
                textAlign: "center",
                gap: 16,
              }}
            >
              <QuoteMark size={48} color="var(--accent)" style={{ opacity: 0.9 }} />
              <h3
                style={{
                  fontFamily: "var(--font-script)",
                  fontSize: 44,
                  margin: 0,
                  color: "var(--cream-card)",
                }}
              >
                Thank you, {firstName}!
              </h3>
              <p style={{ color: "rgba(255,255,255,.65)", maxWidth: "32ch", margin: 0 }}>
                We&apos;ve got your note. You&apos;ll hear from us today — usually within the hour.
              </p>
              <button
                type="button"
                className="btn accent"
                style={{ marginTop: 10 }}
                onClick={() => {
                  setSent(false);
                  reset();
                }}
              >
                Send another
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit(onSubmit)}
              style={{ display: "grid", gap: 18 }}
            >
              <Field label="Your name" error={errors.name?.message}>
                <input
                  {...register("name", { required: "We'll need a name." })}
                  type="text"
                  style={inputStyle(!!errors.name)}
                  onFocus={(e) => {
                    e.target.style.borderColor = "var(--accent)";
                    e.target.style.background = "rgba(255,255,255,.08)";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = errors.name
                      ? "var(--secondary)"
                      : "rgba(255,255,255,.12)";
                    e.target.style.background = "rgba(255,255,255,.06)";
                  }}
                />
              </Field>

              <Field label="Email" error={errors.email?.message}>
                <input
                  {...register("email", {
                    required: "That email looks off.",
                    pattern: {
                      value: /^[^@\s]+@[^@\s]+\.[^@\s]+$/,
                      message: "That email looks off.",
                    },
                  })}
                  type="email"
                  style={inputStyle(!!errors.email)}
                  onFocus={(e) => {
                    e.target.style.borderColor = "var(--accent)";
                    e.target.style.background = "rgba(255,255,255,.08)";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = errors.email
                      ? "var(--secondary)"
                      : "rgba(255,255,255,.12)";
                    e.target.style.background = "rgba(255,255,255,.06)";
                  }}
                />
              </Field>

              <Field label="Booking date (optional)">
                <input
                  {...register("date")}
                  type="date"
                  style={inputStyle(false)}
                  onFocus={(e) => {
                    e.target.style.borderColor = "var(--accent)";
                    e.target.style.background = "rgba(255,255,255,.08)";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "rgba(255,255,255,.12)";
                    e.target.style.background = "rgba(255,255,255,.06)";
                  }}
                />
              </Field>

              <Field label="Message" error={errors.message?.message}>
                <textarea
                  {...register("message", {
                    required: "Tell us a little about what you'd like.",
                  })}
                  rows={4}
                  style={{
                    ...inputStyle(!!errors.message),
                    resize: "vertical",
                    minHeight: 120,
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = "var(--accent)";
                    e.target.style.background = "rgba(255,255,255,.08)";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = errors.message
                      ? "var(--secondary)"
                      : "rgba(255,255,255,.12)";
                    e.target.style.background = "rgba(255,255,255,.06)";
                  }}
                />
              </Field>

              <button
                type="submit"
                className="btn accent"
                style={{ width: "100%", justifyContent: "center" }}
              >
                Send it through
                <span className="arr"><ArrowIcon /></span>
              </button>
            </form>
          )}
        </motion.div>
      </div>

      <div style={{ position: "absolute", left: 0, right: 0, bottom: 0 }}>
        <Divider kind="wave" fill="var(--bg)" />
      </div>

      <style>{`
        @media (max-width: 980px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  );
}
