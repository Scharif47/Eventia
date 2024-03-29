import { FaExclamationTriangle } from "react-icons/fa";
import Link from "next/link";
import Layout from "@/components/Layout";
import styles from "@/styles/404.module.css";

function NotFoundPage() {
  return (
    <Layout title="Page Not Found">
      <div className={styles.error}>
        <h1>
          <FaExclamationTriangle /> 404
        </h1>
        <h4>There is nothing here. Please try a different link.</h4>
        <Link href="/">Go to Home</Link>
      </div>
    </Layout>
  );
}

export default NotFoundPage;
