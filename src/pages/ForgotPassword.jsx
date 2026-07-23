import ForgotPasswordForm from "../components/auth/ForgotPasswordForm";
import PageTransition from "../components/common/PageTransition";
import SEO from "../components/common/SEO";

export default function ForgotPassword() {
  return (
    <PageTransition>
      <SEO
        title="Forgot Password | Anmol Laboratories"
        description="Reset your account password."
      />

      <div className="min-h-screen bg-gradient-to-br from-[#F7FBF8] via-white to-green-50 py-20 px-6">
        <ForgotPasswordForm />
      </div>
    </PageTransition>
  );
}
