import { Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "@/components/Layout";
import ErrorBoundary from "@/components/ErrorBoundary";
import { lazyWithRetry } from "@/lib/lazyWithRetry";
import HomePage from "@/pages/HomePage";

const UnternehmenPage = lazyWithRetry(() => import("@/pages/UnternehmenPage"));
const KandidatenPage = lazyWithRetry(() => import("@/pages/KandidatenPage"));
const UeberUnsPage = lazyWithRetry(() => import("@/pages/UeberUnsPage"));
const KontaktPage = lazyWithRetry(() => import("@/pages/KontaktPage"));
const JobsPage = lazyWithRetry(() => import("@/pages/JobsPage"));
const JobDetailPage = lazyWithRetry(() => import("@/pages/JobDetailPage"));
const BlogPage = lazyWithRetry(() => import("@/pages/BlogPage"));
const BlogArticlePage = lazyWithRetry(() => import("@/pages/BlogArticlePage"));
const ImpressumPage = lazyWithRetry(() => import("@/pages/ImpressumPage"));
const DatenschutzPage = lazyWithRetry(() => import("@/pages/DatenschutzPage"));
const NotFound = lazyWithRetry(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <ErrorBoundary>
          <Suspense fallback={<div className="min-h-[60vh]" aria-hidden="true" />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/unternehmen" element={<UnternehmenPage />} />
              <Route path="/kandidaten" element={<KandidatenPage />} />
              <Route path="/ueber-uns" element={<UeberUnsPage />} />
              <Route path="/jobs" element={<JobsPage />} />
              <Route path="/jobs/:slug" element={<JobDetailPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/blog/:slug" element={<BlogArticlePage />} />
              <Route path="/kontakt" element={<KontaktPage />} />
              <Route path="/impressum" element={<ImpressumPage />} />
              <Route path="/datenschutz" element={<DatenschutzPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
          </ErrorBoundary>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
