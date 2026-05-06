import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaLocationDot,
  FaPaperPlane,
  FaPhone,
} from "react-icons/fa6";
import SectionTitle from "./SectionTitle";
import { MyInfo } from "../constants";
import { fadeInScale, fadeInUp, staggerContainer } from "../utils/motion";

const initialForm = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const validateForm = (values) => {
  const errors = {};

  if (!values.name.trim()) {
    errors.name = "Please enter your name.";
  } else if (values.name.trim().length < 2) {
    errors.name = "Name should be at least 2 characters.";
  }

  if (!values.email.trim()) {
    errors.email = "Please enter your email address.";
  } else if (!emailPattern.test(values.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }

  if (values.subject.trim() && values.subject.trim().length < 3) {
    errors.subject = "Subject should be at least 3 characters.";
  }

  if (!values.message.trim()) {
    errors.message = "Please enter a message.";
  } else if (values.message.trim().length < 16) {
    errors.message = "Message should be at least 16 characters.";
  }

  return errors;
};

const Contact = () => {
  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [status, setStatus] = useState({ type: "idle", message: "" });
  const [sending, setSending] = useState(false);
  const MotionDiv = motion.div;
  const MotionButton = motion.button;

  const onInputChange = (event) => {
    const { name, value } = event.target;
    const nextValues = { ...formData, [name]: value };
    setFormData(nextValues);

    if (touched[name]) {
      setErrors(validateForm(nextValues));
    }
  };

  const onFieldBlur = (event) => {
    const { name } = event.target;
    const nextTouched = { ...touched, [name]: true };
    setTouched(nextTouched);
    setErrors(validateForm(formData));
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    const validationErrors = validateForm(formData);
    setTouched({
      name: true,
      email: true,
      subject: true,
      message: true,
    });
    setErrors(validationErrors);
    setStatus({ type: "idle", message: "" });

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    setSending(true);
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const rawBody = await response.text();
      let result = null;

      if (rawBody) {
        try {
          result = JSON.parse(rawBody);
        } catch {
          result = null;
        }
      }

      if (!response.ok) {
        throw new Error(
          result?.error ||
            "Unable to send message right now. Please try again in a moment.",
        );
      }

      setStatus({
        type: "success",
        message:
          result?.message ||
          "Message sent successfully. I will get back to you soon.",
      });
      setFormData(initialForm);
      setErrors({});
      setTouched({});
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error.message || "Something went wrong while sending your message.",
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <MotionDiv
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.18 }}
      className="px-1 py-4 sm:px-2 sm:py-6"
    >
      <SectionTitle
        title="Get in"
        highlight="Touch"
        subtitle="Open to thoughtful products, strong teams, and well-scoped collaborations."
      />

      <div className="grid gap-5 lg:grid-cols-[0.6fr_1.4fr]">
        <MotionDiv variants={fadeInScale} className="space-y-4">
          <div className="rounded-[1.15rem] bg-app-panel p-5">
            <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500">
              Direct
            </p>
            <div className="mt-4 space-y-3">
              <div className="flex items-center gap-3 text-slate-200">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-app-panel-dark text-app-primary">
                  <FaEnvelope />
                </span>
                <p className="text-sm font-medium">{MyInfo.email}</p>
              </div>
              <div className="flex items-center gap-3 text-slate-200">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-app-panel-dark text-app-primary">
                  <FaPhone />
                </span>
                <p className="text-sm font-medium">{MyInfo.phone}</p>
              </div>
            </div>
          </div>

          <div className="rounded-[1.15rem] bg-app-panel p-5">
            <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500">
              Location
            </p>
            <div className="mt-4 flex items-center gap-3 text-slate-200">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-app-panel-dark text-app-primary">
                <FaLocationDot />
              </span>
              <p className="text-sm font-medium text-white">{MyInfo.address}</p>
            </div>
          </div>
        </MotionDiv>

        <MotionDiv
          variants={fadeInScale}
          className="rounded-[1.15rem] bg-app-panel p-5 sm:p-6"
        >
          <form className="space-y-4" onSubmit={onSubmit} noValidate>
            <div className="grid gap-4 sm:grid-cols-2">
              <Field
                label="Name"
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={onInputChange}
                onBlur={onFieldBlur}
                placeholder="John Doe"
                error={touched.name ? errors.name : ""}
              />
              <Field
                label="Email"
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={onInputChange}
                onBlur={onFieldBlur}
                placeholder="john@example.com"
                error={touched.email ? errors.email : ""}
              />
            </div>

            <Field
              label="Subject"
              id="subject"
              name="subject"
              type="text"
              value={formData.subject}
              onChange={onInputChange}
              onBlur={onFieldBlur}
              placeholder="Project inquiry"
              error={touched.subject ? errors.subject : ""}
            />

            <div>
              <label
                htmlFor="message"
                className="text-[10px] uppercase tracking-[0.2em] text-slate-500"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={onInputChange}
                onBlur={onFieldBlur}
                rows={5}
                placeholder="Tell me about the role or project."
                className={`mt-2 min-h-[140px] w-full rounded-xl bg-app-panel-dark px-4 py-3 text-sm text-white outline-none ring-1 placeholder:text-slate-500 ${
                  touched.message && errors.message
                    ? "ring-rose-400/60"
                    : "ring-white/6 focus:ring-app-primary/40"
                }`}
                aria-invalid={Boolean(touched.message && errors.message)}
              />
              {touched.message && errors.message && (
                <p className="mt-2 text-sm text-rose-400">{errors.message}</p>
              )}
            </div>

            {status.type !== "idle" && (
              <p
                className={
                  status.type === "success"
                    ? "text-sm text-emerald-400"
                    : "text-sm text-rose-400"
                }
              >
                {status.message}
              </p>
            )}

            <MotionButton
              variants={fadeInUp}
              type="submit"
              disabled={sending}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[image:var(--app-primary-gradient)] px-5 py-3 text-sm font-semibold text-slate-950 disabled:opacity-70"
            >
              <FaPaperPlane className="text-xs" />
              {sending ? "Sending..." : "Send Message"}
            </MotionButton>
          </form>
        </MotionDiv>
      </div>
    </MotionDiv>
  );
};

const Field = ({ label, id, error, ...props }) => (
  <div>
    <label
      htmlFor={id}
      className="text-[10px] uppercase tracking-[0.2em] text-slate-500"
    >
      {label}
    </label>
    <input
      id={id}
      className={`mt-2 w-full rounded-xl bg-app-panel-dark px-4 py-3 text-sm text-white outline-none ring-1 placeholder:text-slate-500 ${
        error ? "ring-rose-400/60" : "ring-white/6 focus:ring-app-primary/40"
      }`}
      aria-invalid={Boolean(error)}
      {...props}
    />
    {error && <p className="mt-2 text-sm text-rose-400">{error}</p>}
  </div>
);

export default Contact;
