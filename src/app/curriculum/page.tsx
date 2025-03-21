import { STIX_Two_Text } from "next/font/google";
import { Metadata } from "next"
import FormData from "@/components/FormData";
import ModelCv from "@/components/ModelCv";
import FormDataProvider from "@/components/FormProvider";

const geistStix = STIX_Two_Text({
    variable: "--font-stix-two-textf",
    subsets: ["latin"],
})

export const metadata: Metadata = {
    title: "Curriculum Harvard",
}

const page = () => {
    return (
        <FormDataProvider>
            <div className={`${geistStix.className} min-h-screen flex items-center`}>
                <div className="container">
                    <h1 className="text-center font-bold text-3xl md:text-4xl my-5 text-h1">Currículum Harvard</h1>
                    <div className="grid grid-cols-3 gap-8">
                        <div className="md:col-span-1 col-span-full">
                            <FormData />
                        </div>
                        <ModelCv />
                    </div>
                </div>
            </div>
        </FormDataProvider>
    )
}

export default page