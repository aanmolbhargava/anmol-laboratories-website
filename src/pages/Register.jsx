import RegisterForm from "../components/auth/RegisterForm";
import PageTransition from "../components/common/PageTransition";
import SEO from "../components/common/SEO";

export default function Register() {
  return (
    <PageTransition>
      <SEO
        title="Create Account | Anmol Laboratories"
        description="Create your Anmol Laboratories account."
      />

      <div className="min-h-screen bg-gradient-to-br from-[#F7FBF8] via-white to-green-50 py-20 px-6">
        <RegisterForm />
      </div>
    </PageTransition>
  );
}
