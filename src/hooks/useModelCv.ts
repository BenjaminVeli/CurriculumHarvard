import { useFormDataContext } from "@/components/FormProvider";

const useModelCv = () => {
    const { allValues } = useFormDataContext();

    const linkedinBaseUrl = "https://www.linkedin.com/in/";

    // Function to extract the first part of the LinkedIn username (before the first hyphen)
    const extractFirstPart = (linkedinCode: string) => {
        // Remove any full URL if present
        const cleanCode = linkedinCode.replace(linkedinBaseUrl, '');

        // Split by hyphen and take the first part
        const firstPart = cleanCode.split('-')[0];

        return firstPart;
    };

    const linkedinCode = allValues.linkedin || "";

    const linkedinUrl = linkedinCode.startsWith("http")
        ? linkedinCode
        : `${linkedinBaseUrl}${linkedinCode}`;

    // Modified to show only the first part of the LinkedIn username
    const linkedinDisplay = `linkedin.com/in/${extractFirstPart(linkedinCode)}`;

    // Formatear la fecha en formato "mes año"
    const formatDate = (dateString: string) => {
        if (!dateString) return "";
        const date = new Date(dateString);
        return new Intl.DateTimeFormat("es-ES", { month: "long", year: "numeric" })
            .format(date)
            .replace(/^\w/, (c) => c.toUpperCase()); // Capitaliza la primera letra
    };

    return { allValues, linkedinUrl, linkedinDisplay, formatDate };
};

export default useModelCv;
