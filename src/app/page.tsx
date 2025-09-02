"use client";
import { supabase } from "@/lib/supabase/client";

export default function AddProjectButton() {
  async function handleClick() {
    const { error } = await supabase.from("projects").insert({
      title: "첫 프로젝트 테스트",
    });

    if (error) alert("에러: " + error.message);
    else alert("프로젝트 추가 성공!");
  }

  return <button onClick={handleClick}>테스트 프로젝트 추가</button>;
}