"use client"

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { generateLearningPath, type LearningPathOutput } from "@/ai/flows/generate-learning-path";
import { Loader2, Sparkles, ArrowRight, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

const AGE_RANGES = ["4-6 Years", "7-9 Years", "10-12 Years", "13+ Years"];

export function AssessmentCard() {
  const [selectedAge, setSelectedAge] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<LearningPathOutput | null>(null);

  const handleSelect = async (age: string) => {
    setSelectedAge(age);
    setLoading(true);
    try {
      const output = await generateLearningPath({ ageRange: age });
      setResult(output);
    } catch (error) {
      console.error("Failed to generate path:", error);
    } finally {
      setLoading(false);
    }
  };

  const reset = () => {
    setSelectedAge(null);
    setResult(null);
  };

  return (
    <section className="py-24 px-6 flex justify-center">
      <div className="w-full max-w-2xl animate-fade-in" style={{ animationDelay: '0.2s' }}>
        <Card className="shadow-2xl border-[#064E3B]/10 overflow-hidden bg-white">
          <CardHeader className="bg-[#064E3B]/5 border-b border-[#064E3B]/10 p-8">
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs font-bold uppercase tracking-widest text-[#064E3B]/60">
                Step 1 of 3
              </span>
              <div className="flex space-x-1">
                {[1, 2, 3].map(i => (
                  <div key={i} className={cn("h-1.5 w-8 rounded-full transition-colors", i === 1 ? "bg-[#064E3B]" : "bg-[#064E3B]/10")} />
                ))}
              </div>
            </div>
            <CardTitle className="text-3xl font-headline font-bold text-[#064E3B]">
              Map Their Learning Journey.
            </CardTitle>
            <CardDescription className="text-base">
              Personalized curriculum starts with understanding the student's foundation.
            </CardDescription>
          </CardHeader>
          
          <CardContent className="p-8">
            {!result && !loading ? (
              <div className="space-y-6">
                <p className="text-xl font-semibold text-center mb-8">How old is the child you are enrolling?</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {AGE_RANGES.map((age) => (
                    <Button
                      key={age}
                      variant="outline"
                      className={cn(
                        "h-16 text-lg border-2 transition-all hover:border-[#064E3B] hover:bg-[#064E3B]/5 group font-medium",
                        selectedAge === age ? "border-[#064E3B] bg-[#064E3B]/5" : ""
                      )}
                      onClick={() => handleSelect(age)}
                    >
                      <span>{age}</span>
                      <ArrowRight className="ml-auto w-5 h-5 opacity-0 group-hover:opacity-100 transition-all transform translate-x-[-10px] group-hover:translate-x-0" />
                    </Button>
                  ))}
                </div>
              </div>
            ) : loading ? (
              <div className="py-20 flex flex-col items-center justify-center space-y-6">
                <div className="relative">
                  <Loader2 className="w-16 h-16 text-[#F59E0B] animate-spin" />
                  <Sparkles className="w-6 h-6 text-[#064E3B] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                </div>
                <div className="text-center">
                  <p className="text-xl font-bold text-[#064E3B]">Consulting Our Curriculum Experts...</p>
                  <p className="text-muted-foreground mt-2">Crafting a personalized path for {selectedAge} age group</p>
                </div>
              </div>
            ) : (
              <div className="space-y-8 animate-fade-in">
                <div className="bg-[#F59E0B]/10 p-6 rounded-2xl border border-[#F59E0B]/20">
                  <div className="flex items-center space-x-3 mb-4">
                    <CheckCircle2 className="w-6 h-6 text-[#064E3B]" />
                    <h3 className="text-xl font-bold text-[#064E3B]">Recommended Learning Path</h3>
                  </div>
                  <div className="prose prose-forest">
                    <p className="text-foreground leading-relaxed font-body whitespace-pre-line">
                      {result?.learningPathOverview}
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    className="flex-1 bg-[#F59E0B] hover:bg-[#D97706] text-white py-6 h-auto text-lg font-bold rounded-xl"
                  >
                    Proceed to Registration
                  </Button>
                  <Button 
                    variant="ghost" 
                    onClick={reset}
                    className="py-6 h-auto text-muted-foreground hover:text-[#064E3B]"
                  >
                    Start Over
                  </Button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}