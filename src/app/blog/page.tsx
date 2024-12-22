import Footer from "@/components/Footer";
import Header from "@/components/Header";
import BlogHeroSection from "@/components/BlogHeroSection";
import BlogsData from "@/components/BlogsData";
import BlogSidebar from "@/components/BlogSidebar";
export default function Home() {
    return (
      <div>
        <Header />
        <BlogHeroSection />
        <BlogsData />
        <BlogSidebar />
        <Footer />
        
    </div>
    );
  }