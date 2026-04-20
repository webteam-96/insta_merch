import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { isValidPhoneNumber } from "libphonenumber-js";
import { ArrowRight, CheckCircle2, Lock } from "lucide-react";
import clsx from "clsx";

const countries = [
  { flag: "🇮🇳", code: "+91", iso: "IN" as const },
  { flag: "🇺🇸", code: "+1", iso: "US" as const },
  { flag: "🇬🇧", code: "+44", iso: "GB" as const },
  { flag: "🇦🇪", code: "+971", iso: "AE" as const },
  { flag: "🇸🇬", code: "+65", iso: "SG" as const },
  { flag: "🇦🇺", code: "+61", iso: "AU" as const },
];

const followerTiers = [
  "100K – 250K",
  "250K – 500K",
  "500K – 1M",
  "1M – 5M",
  "5M+",
] as const;

type FollowerTier = (typeof followerTiers)[number];

const schema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, "Please enter your full name")
    .regex(/^[A-Za-z][A-Za-z\s.'-]+$/, "Letters, spaces and . ' - only"),
  email: z.string().trim().email("Enter a valid email"),
  countryIso: z.enum(["IN", "US", "GB", "AE", "SG", "AU"]),
  phone: z.string().trim().min(5, "Enter your mobile number"),
  instagram: z
    .string()
    .trim()
    .min(2, "Enter your Instagram handle")
    .transform((v) => v.replace(/^https?:\/\/(www\.)?instagram\.com\//i, ""))
    .transform((v) => v.replace(/^@/, ""))
    .refine((v) => /^[A-Za-z0-9._]{1,30}$/.test(v), {
      message: "Invalid handle",
    }),
  followers: z.enum([
    "100K – 250K",
    "250K – 500K",
    "500K – 1M",
    "1M – 5M",
    "5M+",
  ]),
});

type FormValues = z.infer<typeof schema>;

export function LeadForm() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    setError,
    trigger,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { countryIso: "IN" },
    mode: "onBlur",
  });

  const selectedIso = watch("countryIso");
  const selectedFollowers = watch("followers");
  const selectedCountry =
    countries.find((c) => c.iso === selectedIso) ?? countries[0];

  const onSubmit = async (data: FormValues) => {
    const full = `${selectedCountry.code}${data.phone.replace(/\D/g, "")}`;
    if (!isValidPhoneNumber(full, data.countryIso)) {
      setError("phone", { message: "Please enter a valid mobile number" });
      return;
    }
    await new Promise((r) => setTimeout(r, 900));
    console.log("Lead submitted:", { ...data, fullPhone: full });
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div
        className="rounded-xl border p-10 text-center"
        style={{
          background: "linear-gradient(135deg, #f0fdf4, #dcfce7)",
          borderColor: "#bbf7d0",
        }}
      >
        <div
          className="mx-auto w-16 h-16 rounded-full flex items-center justify-center text-white mb-4"
          style={{
            background:
              "linear-gradient(135deg, #833AB4 0%, #E1306C 50%, #F77737 100%)",
          }}
        >
          <CheckCircle2 className="h-8 w-8" strokeWidth={2.5} />
        </div>
        <h3 className="font-display font-extrabold text-2xl mb-2 text-ink">
          You're In!
        </h3>
        <p className="text-ink-gray600 max-w-md mx-auto text-[15px]">
          We've received your details. Our team will reach out within 24 hours
          to schedule your free 30-minute strategy session.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white rounded-xl border border-ink-gray200 shadow-lg p-6 sm:p-8 space-y-4"
      noValidate
    >
      <div className="mb-1">
        <span className="badge">⚡ Free Strategy Session</span>
      </div>
      <div>
        <h3 className="font-display font-extrabold text-2xl -tracking-[0.02em] text-ink">
          Claim Your <span className="text-ig-gradient">Free Session</span>
        </h3>
        <p className="mt-1.5 text-ink-gray600 text-[14px]">
          30 minutes · No pitch · Just your personalised ₹50L roadmap.
        </p>
      </div>

      <Field label="Full Name" error={errors.fullName?.message}>
        <input
          type="text"
          placeholder="Your full name"
          autoComplete="name"
          {...register("fullName")}
          className={inputCls(!!errors.fullName)}
        />
      </Field>

      <Field label="Email Address" error={errors.email?.message}>
        <input
          type="email"
          placeholder="you@brand.com"
          autoComplete="email"
          {...register("email")}
          className={inputCls(!!errors.email)}
        />
      </Field>

      <Field label="Mobile Number" error={errors.phone?.message}>
        <div
          className={clsx(
            "flex items-stretch rounded-[12px] border bg-white overflow-hidden transition",
            "focus-within:border-brand-pink focus-within:ring-2 focus-within:ring-brand-pink/20",
            errors.phone
              ? "border-brand-danger/60"
              : "border-ink-gray200 hover:border-ink-gray400/40"
          )}
        >
          <div className="relative flex items-center border-r border-ink-gray200 bg-ink-gray50">
            <select
              {...register("countryIso")}
              aria-label="Country code"
              className="appearance-none bg-transparent cursor-pointer py-3 pl-3 pr-8 text-[14px] text-ink font-medium outline-none focus:ring-0"
            >
              {countries.map((c) => (
                <option key={c.iso} value={c.iso}>
                  {c.flag} {c.code}
                </option>
              ))}
            </select>
            <svg
              aria-hidden="true"
              viewBox="0 0 20 20"
              className="pointer-events-none absolute right-2 h-4 w-4 text-ink-gray400"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.06l3.71-3.83a.75.75 0 111.08 1.04l-4.25 4.39a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <input
            type="tel"
            placeholder="98765 43210"
            autoComplete="tel-national"
            {...register("phone")}
            className="flex-1 min-w-0 bg-transparent px-4 py-3 text-[14px] text-ink placeholder-ink-gray400 outline-none"
          />
        </div>
      </Field>

      <Field label="Instagram Handle" error={errors.instagram?.message}>
        <div className="relative">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-ink-gray400 pointer-events-none">
            @
          </span>
          <input
            type="text"
            placeholder="yourhandle"
            autoCapitalize="none"
            {...register("instagram")}
            className={clsx(inputCls(!!errors.instagram), "pl-8")}
          />
        </div>
      </Field>

      <Field label="Follower Count" error={errors.followers?.message}>
        <input type="hidden" {...register("followers")} />
        <div className="grid grid-cols-3 gap-2">
          {followerTiers.slice(0, 3).map((t) => (
            <FollowerChip
              key={t}
              label={t}
              selected={selectedFollowers === t}
              onClick={() => {
                setValue("followers", t as FollowerTier, {
                  shouldValidate: true,
                });
                trigger("followers");
              }}
            />
          ))}
        </div>
        <div className="grid grid-cols-2 gap-2 mt-2">
          {followerTiers.slice(3).map((t) => (
            <FollowerChip
              key={t}
              label={t}
              selected={selectedFollowers === t}
              onClick={() => {
                setValue("followers", t as FollowerTier, {
                  shouldValidate: true,
                });
                trigger("followers");
              }}
            />
          ))}
        </div>
      </Field>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full mt-2 inline-flex items-center justify-center gap-2 rounded-pill text-white px-7 py-4 font-bold text-sm uppercase tracking-wide shadow-brand-cta transition hover:-translate-y-0.5 hover:shadow-brand-cta-hover disabled:opacity-60 disabled:cursor-not-allowed"
        style={{
          background:
            "linear-gradient(135deg, #833AB4 0%, #C13584 30%, #E1306C 55%, #FD1D1D 75%, #F77737 100%)",
          fontFamily: "Sora, sans-serif",
        }}
      >
        {isSubmitting ? (
          "Sending…"
        ) : (
          <>
            Show Me My ₹50L Roadmap
            <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
          </>
        )}
      </button>

      <p className="flex items-center justify-center gap-2 text-xs text-ink-gray400 pt-1">
        <Lock className="h-3.5 w-3.5" />
        We respect your privacy. No spam, ever. Only 2 spots left this month.
      </p>
    </form>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="block text-[11px] font-bold uppercase tracking-[0.1em] text-ink-gray600 mb-1.5">
        {label}
      </span>
      {children}
      {error && (
        <span className="mt-1 block text-xs text-brand-danger">{error}</span>
      )}
    </label>
  );
}

function inputCls(hasError: boolean) {
  return clsx(
    "w-full rounded-[12px] border bg-white px-4 py-3 text-[14px] text-ink placeholder-ink-gray400 outline-none transition",
    "focus:border-brand-pink focus:ring-2 focus:ring-brand-pink/20",
    hasError
      ? "border-brand-danger/60"
      : "border-ink-gray200 hover:border-ink-gray400/40"
  );
}

function FollowerChip({
  label,
  selected,
  onClick,
}: {
  label: string;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={selected}
      className={clsx(
        "relative w-full rounded-[10px] border-[1.5px] px-3 py-3 text-[13px] font-semibold leading-tight text-center transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-pink/30",
        selected
          ? "border-transparent bg-gradient-to-br from-brand-purple via-brand-pink to-brand-orange text-white shadow-[0_4px_14px_rgba(225,48,108,0.35)]"
          : "border-ink-gray200 bg-ink-gray50 text-ink-gray600 hover:border-brand-pink hover:text-brand-magenta"
      )}
    >
      {label}
      {selected && (
        <span className="absolute top-1 right-1.5 text-white/90 text-[10px]">
          ✓
        </span>
      )}
    </button>
  );
}
