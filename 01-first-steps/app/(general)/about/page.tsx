import { Metadata } from "next";

export const metadata:Metadata = {
 title: 'SEO Title',
 description: 'SEO Title',
 keywords: ["About Page"]
};

export default function AboutPage(){
  return(
    <>
      <p className="text-7xl">About Page</p>    
    </>
  )
}