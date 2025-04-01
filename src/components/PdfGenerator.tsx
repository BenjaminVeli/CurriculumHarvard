"use client"
import React from 'react';
import { pdf, Font } from '@react-pdf/renderer';
import { Document, Page, Text, Link, StyleSheet, View } from '@react-pdf/renderer';
import Pdf from "../assets/icons/pdf.svg"
import useModelCv from '@/hooks/useModelCv';

Font.register({
    family: "STIXTwoText-Bold",
    src: "/fonts/STIXTwoText-Bold.ttf",
});

Font.register({
    family: "STIXTwoText-Italic",
    src: "/fonts/STIXTwoText-Italic.ttf",
});

Font.register({
    family: "STIXTwoText-Regular",
    src: "/fonts/STIXTwoText-Regular.ttf",
});

const styles = StyleSheet.create({
    page: {
        padding: 30,
        flexDirection: 'column',
    },
    header: {
        fontSize: 24,
        textAlign: 'center',
        marginBottom: 8,
        fontWeight: 'bold',
        fontFamily: 'STIXTwoText-Bold',
    },
    title: {
        fontSize: 12,
        textAlign: 'left',
        marginBottom: 2,
        fontWeight: 'bold',
        fontFamily: 'STIXTwoText-Bold',
    },
    titleTop: {
        fontSize: 12,
        textAlign: 'left',
        marginTop: 8,
        fontWeight: 'bold',
        fontFamily: 'STIXTwoText-Bold',
    },
    horizontalLine: {
        borderBottomWidth: 1,
        borderBottomColor: '#000000',
        borderBottomStyle: 'solid',
        width: '100%',
        marginBottom: 10,
    },
    experienceContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 3,
    },
    subTitle: {
        fontSize: 11,
        fontWeight: 'bold',
        fontFamily: 'STIXTwoText-Bold',
    },
    text: {
        fontSize: 11,
        textAlign: 'left',
        marginBottom: 5,
        fontFamily: 'STIXTwoText-Regular',
    },
    textItalic: {
        fontSize: 11,
        textAlign: 'left',
        marginBottom: 5,
        fontFamily: 'STIXTwoText-Italic',
    },
    textMarginLBottom: {
        fontSize: 11,
        textAlign: 'left',
        marginLeft: 12,
        marginRight: 20,
        marginBottom: 30,
        fontFamily: 'STIXTwoText-Regular',
    },
    textMarginLeftRightB: {
        fontSize: 11,
        textAlign: 'left',
        marginLeft: 12,
        marginRight: 20,
        marginBottom: 10,
        fontFamily: 'STIXTwoText-Regular',
    },
    resume: {
        fontSize: 10.5,
        textAlign: 'left',
        marginBottom: 8,
        fontFamily: 'STIXTwoText-Italic',
    },
    contactInfo: {
        fontSize: 11,
        textAlign: 'center',
        marginBottom: 8,
        fontFamily: 'STIXTwoText-Regular',
    },
    link: {
        fontSize: 11,
        color: '#1155cc',
        fontFamily: 'STIXTwoText-Regular',
    }
});

const PDFGenerator = () => {
    const { allValues, linkedinUrl, linkedinDisplay, formatDate } = useModelCv();

    const generatePDF = async () => {
        const doc = (
            <Document>
                <Page size="A4" style={styles.page}>
                    <Text style={styles.header}>{allValues.nameLastname || '_____________________'}</Text>
                    <Text style={styles.contactInfo}>
                        {`${allValues.city || '___'}, ${allValues.country || '___'} · ${allValues.phone || '___'} · ${allValues.email || '___'} · `}
                        <Link src={linkedinUrl} style={styles.link}>
                            {linkedinDisplay}
                        </Link>
                    </Text>
                    <View style={styles.horizontalLine} />
                    <Text style={styles.resume}>{allValues.profileSummary || '_____'}</Text>
                    <Text style={styles.titleTop}>EXPERIENCIA PROFESIONAL</Text>
                    <View style={styles.horizontalLine} />


                    {/* EXPERIENCE 1 */}
                    <View style={styles.experienceContainer}>
                        <Text style={styles.subTitle}>{allValues.experience1 || '_____'}</Text>
                        <Text style={styles.subTitle}>
                            {`${allValues.experience1_city || '_____'}, ${allValues.experience1_country || '_____'}`}
                        </Text>
                    </View>
                    <View style={styles.experienceContainer}>
                        <Text style={styles.text}>{allValues.role1 || '_____'}</Text>
                        <Text style={styles.textItalic}>
                            {`${allValues.experience1_start_date ? formatDate(allValues.experience1_start_date) : "__________"} – ${allValues.experience1_end_date ? formatDate(allValues.experience1_end_date) : "__________"}`}
                        </Text>
                    </View>

                    <Text style={styles.textMarginLeftRightB}>•{"  "}{allValues.experience1_activity1 || '_____'}</Text>
                    <Text style={styles.textMarginLeftRightB}>•{"  "}{allValues.experience1_activity2 || '_____'}</Text>
                    <Text style={styles.textMarginLeftRightB}>•{"  "}{allValues.experience1_activity3 || '_____'}</Text>
                    <Text style={styles.textMarginLBottom}>•{"  "}{allValues.experience1_activity4 || '_____'}</Text>
                    {/*--------------*/}




                    {/* EXPERIENCE 2 */}
                    <View style={styles.experienceContainer}>
                        <Text style={styles.subTitle}>{allValues.experience2 || '_____'}</Text>
                        <Text style={styles.subTitle}>
                            {`${allValues.experience2_city || '_____'}, ${allValues.experience2_country || '_____'}`}
                        </Text>
                    </View>
                    <View style={styles.experienceContainer}>
                        <Text style={styles.text}>{allValues.role2 || '_____'}</Text>
                        <Text style={styles.textItalic}>
                            {`${allValues.experience2_start_date ? formatDate(allValues.experience2_start_date) : "__________"} – ${allValues.experience2_end_date ? formatDate(allValues.experience2_end_date) : "__________"}`}
                        </Text>
                    </View>

                    <Text style={styles.textMarginLeftRightB}>•{"  "}{allValues.experience2_activity1 || '_____'}</Text>
                    <Text style={styles.textMarginLBottom}>•{"  "}{allValues.experience2_activity2 || '_____'}</Text>
                    {/*--------------*/}




                    {/* EXPERIENCE 3 */}
                    <View style={styles.experienceContainer}>
                        <Text style={styles.subTitle}>{allValues.experience3 || '_____'}</Text>
                        <Text style={styles.subTitle}>
                            {`${allValues.experience3_city || '_____'}, ${allValues.experience3_country || '_____'}`}
                        </Text>
                    </View>
                    <View style={styles.experienceContainer}>
                        <Text style={styles.text}>{allValues.role3 || '_____'}</Text>
                        <Text style={styles.textItalic}>
                            {`${allValues.experience3_start_date ? formatDate(allValues.experience3_start_date) : "__________"} – ${allValues.experience3_end_date ? formatDate(allValues.experience3_end_date) : "__________"}`}
                        </Text>
                    </View>

                    <Text style={styles.textMarginLBottom}>•{"  "}{allValues.experience3_activity1 || '_____'}</Text>
                    {/*--------------*/}





                    <Text style={styles.title}>EDUCACIÓN</Text>
                    <View style={styles.horizontalLine} />
                    <View style={styles.experienceContainer}>
                        <Text style={styles.subTitle}>{(allValues.studycenter || '_____').toUpperCase()}</Text>
                        <Text style={styles.subTitle}>
                            {`${allValues.studycenter_city || '_____'}, ${allValues.studycenter_country || '_____'}`}
                        </Text>
                    </View>
                    <View style={styles.experienceContainer}>
                        <Text style={styles.text}>{allValues.role3 || '_____'}</Text>
                        <Text style={styles.textItalic}>
                            {allValues.graduation_date ? formatDate(allValues.graduation_date) : "__________"}
                        </Text>
                    </View>




                    <Text style={styles.titleTop}>SKILLS ADICIONALES</Text>
                    <View style={styles.horizontalLine} />
                    <Text style={styles.textMarginLeftRightB}>•{"  "}{allValues.skill1 || '_____'}</Text>
                    <Text style={styles.textMarginLeftRightB}>•{"  "}{allValues.skill2 || '_____'}</Text>
                </Page>
            </Document>
        );

        const blob = await pdf(doc).toBlob();
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'CV.pdf';
        link.click();
    };

    return (
        <div className="flex flex-col items-center justify-start h-full">
            <div className="flex gap-2">
                <h2 className="text-base mb-4">Tu Currículum ha sido generado</h2>
                <Pdf className="h-6 w-6" />
            </div>
            <button
                onClick={generatePDF}
                className="text-sm/6 font-semibold px-3 py-1.5 bg-red-600 text-white rounded-lg hover:bg-red-700 duration-300 transition-all cursor-pointer"
            >
                Descargar Currículum
            </button>
        </div>
    );
};

export default PDFGenerator;
