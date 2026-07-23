import LoginForm from "../components/auth/LoginForm";
import PageTransition from "../components/common/PageTransition";

export default function Login() {
  return (
    <PageTransition>
      <section className="min-h-[85vh] bg-[#F7FBF8] flex items-center justify-center px-6 py-20">
        <LoginForm />
      </section>
    </PageTransition>
  );
}
