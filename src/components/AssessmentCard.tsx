
"use client"

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2, Sparkles, ArrowRight, CheckCircle2, User, Mail, Phone, ChevronLeft } from "lucide-react";
import { cn } from "@/lib/utils";
import { Progress } from "@/components/ui/progress";

type Question = {
  id: number;
  text: string;
  options: string[];
};

const QUESTIONS: Question[] = [
  {
    id: 1,
    text: "How old is the child you are enrolling?",
    options: ["4-6 Years", "7-9 Years", "10-12 Years", "13+ Years"],
  },
  {
    id: 2,
    text: "What is their current educational setting for Islamic studies?",
    options: ["Local Maulvi", "Online tutor", "Madarsa", "Starting fresh"],
  },
  {
    id: 3,
    text: "What is your primary goal for their Islamic education right now?",
    options: ["Foundational reading", "Perfecting Tajweed", "Understanding Tarjuma", "Overall Islamic character building"],
  },
  {
    id: 4,
    text: "How does your child usually learn best?",
    options: ["Highly interactive/gamified", "Listening and repeating", "Visual aids", "1-on-1 focus"],
  },
  {
    id: 5,
    text: "Can your child currently recognize basic Arabic alphabets (Alif, Ba, Taa) independently?",
    options: ["Yes they know them", "No they are just starting"],
  },
  {
    id: 6,
    text: "Can they join letters together to fluently read small Arabic words?",
    options: ["Yes they can read fluently", "No they are still practicing"],
  },
  {
    id: 7,
    text: "Do they currently recite the Quran applying basic Tajweed rules?",
    options: ["Yes they know basic Tajweed", "No we want to focus on Tajweed"],
  },
  {
    id: 8,
    text: "What is their current level of Tarjuma (translation) or Surah memorization?",
    options: ["None yet", "Memorized a few short Surahs", "Understands basic meanings", "Advanced"],
  },
  {
    id: 9,
    text: "Beyond reading, how familiar is your child with basic daily Duas and Islamic Adab (etiquette)?",
    options: ["Very familiar", "Knows a few", "We want to build this"],
  },
  {
    id: 10,
    text: "Our interactive batches are designed for steady progress. Can your child commit to our standard schedule of three 45-minute sessions a week?",
    options: ["Yes", "No we need flexibility"],
  },
  {
    id: 11,
    text: "To ensure an immersive experience, which device will your child primarily use for these live sessions?",
    options: ["Laptop/Desktop", "iPad/Tablet", "Smartphone"],
  },
  {
    id: 12,
    text: "How would you prefer to stay updated on your child’s progress?",
    options: ["Dedicated parent dashboard", "Weekly email reports", "Monthly check-ins"],
  },
];

export function AssessmentCard() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showLeadForm, setShowLeadForm] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", whatsapp: "" });

  const progress = ((currentStep) / 12) * 100;

  const handleOptionSelect = (option: string) => {
    const questionId = QUESTIONS[currentStep].id;
    const newAnswers = { ...answers, [questionId]: option };
    setAnswers(newAnswers);

    // Conditional Logic Rules
    let nextStep = currentStep + 1;

    if (questionId === 5 && option === "No they are just starting") {
      nextStep = 8; // Jump to Q9 (index 8)
    } else if (questionId === 6 && option === "No they are still practicing") {
      nextStep = 8; // Jump to Q9 (index 8)
    } else if (questionId === 7 && option === "No we want to focus on Tajweed") {
      nextStep = 8; // Jump to Q9 (index 8)
    }

    if (nextStep >= QUESTIONS.length) {
      startAnalysis();
    } else {
      setCurrentStep(nextStep);
    }
  };

  const startAnalysis = () => {
    setIsAnalyzing(true);
    setTimeout(() => {
      setIsAnalyzing(false);
      setShowLeadForm(true);
    }, 2500);
  };

  const handleBack = () => {
    if (currentStep > 0) {
      // Find the previous question that wasn't skipped
      // For simplicity in this UI, we just go back one index, 
      // but a more robust system would track the history stack.
      setCurrentStep(currentStep - 1);
    }
  };

const handleFormSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  // 🔥 Convert answers object → structured array
  const formattedAnswers = Object.entries(answers).map(
    ([questionId, answer]) => ({
      question: QUESTIONS.find(q => q.id === Number(questionId))?.text || "",
      answer,
    })
  );

  const payload = {
    name: formData.name,
    email: formData.email,
    whatsapp: formData.whatsapp,
    answers: formattedAnswers,
  };

  try {
    const res = await fetch("/api/assessment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const data = await res.json();

    console.log("Saved:", data);

    if (data.success) {
      setIsSubmitted(true); // ✅ ONLY after DB save
    }
  } catch (error) {
    console.error("Error saving:", error);
  }
};

  if (isSubmitted) {
    return (
      <section className="py-24 px-6 flex justify-center">
        <Card className="w-full max-w-2xl shadow-2xl border-[#064E3B]/10 bg-white p-12 text-center animate-fade-in">
          <div className="w-20 h-20 bg-[#F59E0B] rounded-full flex items-center justify-center mx-auto mb-6 text-white">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <h2 className="text-3xl font-bold text-[#064E3B] mb-4">Registration Received!</h2>
          <p className="text-muted-foreground text-lg mb-8">
            JazakAllah Khair, {formData.name}. Our academic counselor will reach out to you on WhatsApp ({formData.whatsapp}) within the next 24 hours to schedule your child's live orientation session.
          </p>
          <Button 
            className="bg-[#064E3B] text-white px-8 h-12 rounded-xl"
            onClick={() => window.location.reload()}
          >
            Back to Home
          </Button>
        </Card>
      </section>
    );
  }

  return (
    <section id="assessment" className="py-24 px-6 flex justify-center">
      <div className="w-full max-w-2xl">
        <Card className="shadow-2xl border-[#064E3B]/10 overflow-hidden bg-white min-h-[500px] flex flex-col">
          <CardHeader className="bg-[#064E3B]/5 border-b border-[#064E3B]/10 p-8">
            <div className="flex justify-between items-center mb-4">
              <span className="text-xs font-bold uppercase tracking-widest text-[#064E3B]/60">
                {showLeadForm ? "Final Step" : `Question ${currentStep + 1} of 12`}
              </span>
              {!showLeadForm && !isAnalyzing && currentStep > 0 && (
                <Button variant="ghost" size="sm" onClick={handleBack} className="text-[#064E3B]/60 hover:text-[#064E3B]">
                  <ChevronLeft className="w-4 h-4 mr-1" /> Back
                </Button>
              )}
            </div>
            {!showLeadForm && !isAnalyzing && (
              <Progress value={progress} className="h-2 bg-[#064E3B]/10" />
            )}
            {showLeadForm && (
              <Progress value={100} className="h-2 bg-[#F59E0B]" />
            )}
            <CardTitle className="text-2xl font-bold text-[#064E3B] mt-6 leading-tight">
              {isAnalyzing 
                ? "Analyzing Profile..." 
                : showLeadForm 
                  ? "Alhamdulillah, your child's personalized Learning Path is ready." 
                  : QUESTIONS[currentStep].text}
            </CardTitle>
          </CardHeader>
          
          <CardContent className="p-8 flex-1 flex flex-col justify-center">
            {isAnalyzing ? (
              <div className="py-12 flex flex-col items-center justify-center space-y-6 animate-fade-in">
                <div className="relative">
                  <Loader2 className="w-16 h-16 text-[#F59E0B] animate-spin" />
                  <Sparkles className="w-6 h-6 text-[#064E3B] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                </div>
                <div className="text-center">
                  <p className="text-xl font-bold text-[#064E3B]">Analyzing Profile & Checking Batch Availability...</p>
                  <p className="text-muted-foreground mt-2">Connecting with our certified Aalims</p>
                </div>
              </div>
            ) : showLeadForm ? (
              <form onSubmit={handleFormSubmit} className="space-y-6 animate-fade-in">
                <p className="text-muted-foreground mb-6">
                  Enter your details to reveal their specific batch recommendation and lock in your ₹1599/month rate.
                </p>
                
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm font-bold text-[#064E3B]">Parent's Full Name</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                      <Input 
                        id="name" 
                        required 
                        placeholder="e.g. Abdullah Khan" 
                        className="pl-10 h-12 rounded-xl border-[#064E3B]/10"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-bold text-[#064E3B]">Email Address</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                      <Input 
                        id="email" 
                        type="email" 
                        required 
                        placeholder="name@example.com" 
                        className="pl-10 h-12 rounded-xl border-[#064E3B]/10"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="whatsapp" className="text-sm font-bold text-[#064E3B]">WhatsApp Number</Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                      <Input 
                        id="whatsapp" 
                        required 
                        placeholder="+91 XXXXX XXXXX" 
                        className="pl-10 h-12 rounded-xl border-[#064E3B]/10"
                        value={formData.whatsapp}
                        onChange={(e) => setFormData({...formData, whatsapp: e.target.value})}
                      />
                    </div>
                  </div>
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-[#F59E0B] hover:bg-[#D97706] text-white py-8 h-auto text-xl font-bold rounded-xl shadow-lg transition-all hover:scale-[1.02]"
                >
                  Submit
                </Button>
              </form>
            ) : (
              <div key={currentStep} className="grid grid-cols-1 gap-4 animate-fade-in">
                {QUESTIONS[currentStep].options.map((option) => (
                  <Button
                    key={option}
                    variant="outline"
                    className={cn(
                      "h-auto min-h-[70px] py-4 px-6 text-left flex items-center justify-between border-2 rounded-2xl transition-all duration-300 group hover:border-[#064E3B] hover:bg-[#064E3B]/5",
                      answers[QUESTIONS[currentStep].id] === option ? "border-[#064E3B] bg-[#064E3B]/5" : "border-slate-100"
                    )}
                    onClick={() => handleOptionSelect(option)}
                  >
                    <span className="text-lg font-medium text-slate-800">{option}</span>
                    <ArrowRight className="w-5 h-5 text-[#064E3B] opacity-0 group-hover:opacity-100 transition-all transform translate-x-[-10px] group-hover:translate-x-0" />
                  </Button>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
