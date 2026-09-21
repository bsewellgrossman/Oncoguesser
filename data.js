const CANCER_DATA = {
    "Breast Cancer": {
        displayName: "Breast Cancer",
        studyId: "brca_tcga",
        sampleCount: 1084,
        histologyImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Invasive_ductal_carcinoma_of_the_breast.jpg/512px-Invasive_ductal_carcinoma_of_the_breast.jpg",
        histologyCaption: "Invasive ductal carcinoma - H&E stain",
        mutations: [
            { gene: "PIK3CA", frequency: "34.1" },
            { gene: "TP53", frequency: "33.2" },
            { gene: "CDH1", frequency: "11.0" },
            { gene: "GATA3", frequency: "10.8" },
            { gene: "MAP3K1", frequency: "7.8" },
            { gene: "KMT2C", frequency: "7.2" },
            { gene: "PTEN", frequency: "4.5" },
            { gene: "AKT1", frequency: "3.8" },
            { gene: "CBFB", frequency: "3.5" },
            { gene: "RUNX1", frequency: "3.2" }
        ],
        cnv: {
            amplifications: [
                { gene: "ERBB2", frequency: "18.2" },
                { gene: "CCND1", frequency: "15.8" },
                { gene: "MYC", frequency: "14.2" },
                { gene: "FGFR1", frequency: "12.1" },
                { gene: "MDM2", frequency: "8.5" }
            ],
            deletions: [
                { gene: "CDKN2A", frequency: "8.2" },
                { gene: "PTEN", frequency: "6.5" },
                { gene: "RB1", frequency: "5.8" },
                { gene: "MAP2K4", frequency: "4.2" },
                { gene: "TP53", frequency: "3.8" }
            ]
        },
        clinical: {
            medianAge: 58,
            malePercent: 1,
            femalePercent: 99,
            medianTMB: 1.5
        }
    },
    "Lung Adenocarcinoma": {
        displayName: "Lung Adenocarcinoma",
        studyId: "luad_tcga",
        sampleCount: 566,
        histologyImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Adenocarcinoma_of_the_lung.jpg/512px-Adenocarcinoma_of_the_lung.jpg",
        histologyCaption: "Lung adenocarcinoma - H&E stain",
        mutations: [
            { gene: "TP53", frequency: "52.1" },
            { gene: "KRAS", frequency: "32.6" },
            { gene: "KEAP1", frequency: "18.2" },
            { gene: "STK11", frequency: "16.8" },
            { gene: "EGFR", frequency: "14.2" },
            { gene: "NF1", frequency: "11.5" },
            { gene: "BRAF", frequency: "10.2" },
            { gene: "SETD2", frequency: "9.1" },
            { gene: "RBM10", frequency: "8.5" },
            { gene: "MGA", frequency: "7.8" }
        ],
        cnv: {
            amplifications: [
                { gene: "TERT", frequency: "18.5" },
                { gene: "MYC", frequency: "12.8" },
                { gene: "EGFR", frequency: "11.2" },
                { gene: "NKX2-1", frequency: "10.5" },
                { gene: "MDM2", frequency: "8.2" }
            ],
            deletions: [
                { gene: "CDKN2A", frequency: "22.5" },
                { gene: "STK11", frequency: "12.8" },
                { gene: "KEAP1", frequency: "8.5" },
                { gene: "PTEN", frequency: "6.2" },
                { gene: "RB1", frequency: "5.1" }
            ]
        },
        clinical: {
            medianAge: 65,
            malePercent: 46,
            femalePercent: 54,
            medianTMB: 6.2
        }
    },
    "Lung Squamous Cell Carcinoma": {
        displayName: "Lung Squamous Cell Carcinoma",
        studyId: "lusc_tcga",
        sampleCount: 487,
        histologyImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Squamous_cell_carcinoma_of_the_lung.jpg/512px-Squamous_cell_carcinoma_of_the_lung.jpg",
        histologyCaption: "Lung squamous cell carcinoma - H&E stain",
        mutations: [
            { gene: "TP53", frequency: "81.2" },
            { gene: "CDKN2A", frequency: "18.5" },
            { gene: "NFE2L2", frequency: "15.8" },
            { gene: "KEAP1", frequency: "12.2" },
            { gene: "PIK3CA", frequency: "11.5" },
            { gene: "PTEN", frequency: "8.8" },
            { gene: "RB1", frequency: "7.2" },
            { gene: "NOTCH1", frequency: "6.8" },
            { gene: "HRAS", frequency: "5.5" },
            { gene: "FBXW7", frequency: "5.2" }
        ],
        cnv: {
            amplifications: [
                { gene: "SOX2", frequency: "42.5" },
                { gene: "PIK3CA", frequency: "28.2" },
                { gene: "TP63", frequency: "25.8" },
                { gene: "FGFR1", frequency: "18.5" },
                { gene: "CCND1", frequency: "15.2" }
            ],
            deletions: [
                { gene: "CDKN2A", frequency: "45.2" },
                { gene: "PTEN", frequency: "12.5" },
                { gene: "RB1", frequency: "8.8" },
                { gene: "NOTCH1", frequency: "6.2" },
                { gene: "FAT1", frequency: "5.5" }
            ]
        },
        clinical: {
            medianAge: 68,
            malePercent: 74,
            femalePercent: 26,
            medianTMB: 9.8
        }
    },
    "Colorectal Cancer": {
        displayName: "Colorectal Cancer",
        studyId: "coadread_tcga",
        sampleCount: 594,
        histologyImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Colon_cancer_2.jpg/512px-Colon_cancer_2.jpg",
        histologyCaption: "Colorectal adenocarcinoma - H&E stain",
        mutations: [
            { gene: "APC", frequency: "76.2" },
            { gene: "TP53", frequency: "54.8" },
            { gene: "KRAS", frequency: "42.5" },
            { gene: "PIK3CA", frequency: "18.2" },
            { gene: "FBXW7", frequency: "11.5" },
            { gene: "SMAD4", frequency: "10.8" },
            { gene: "TCF7L2", frequency: "9.5" },
            { gene: "NRAS", frequency: "5.8" },
            { gene: "BRAF", frequency: "5.5" },
            { gene: "CTNNB1", frequency: "5.2" }
        ],
        cnv: {
            amplifications: [
                { gene: "MYC", frequency: "12.5" },
                { gene: "ERBB2", frequency: "8.2" },
                { gene: "EGFR", frequency: "6.8" },
                { gene: "IGF2", frequency: "5.5" },
                { gene: "CCNE1", frequency: "4.2" }
            ],
            deletions: [
                { gene: "SMAD4", frequency: "18.5" },
                { gene: "APC", frequency: "15.2" },
                { gene: "PTEN", frequency: "8.5" },
                { gene: "TP53", frequency: "7.8" },
                { gene: "CDKN2A", frequency: "5.2" }
            ]
        },
        clinical: {
            medianAge: 66,
            malePercent: 53,
            femalePercent: 47,
            medianTMB: 3.5
        }
    },
    "Prostate Cancer": {
        displayName: "Prostate Cancer",
        studyId: "prad_tcga",
        sampleCount: 498,
        histologyImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Prostate_adenocarcinoma_with_perineural_invasion.jpg/512px-Prostate_adenocarcinoma_with_perineural_invasion.jpg",
        histologyCaption: "Prostate adenocarcinoma - H&E stain",
        mutations: [
            { gene: "SPOP", frequency: "11.2" },
            { gene: "TP53", frequency: "8.5" },
            { gene: "FOXA1", frequency: "6.8" },
            { gene: "PTEN", frequency: "5.2" },
            { gene: "ATM", frequency: "4.5" },
            { gene: "MED12", frequency: "4.2" },
            { gene: "CDK12", frequency: "3.8" },
            { gene: "BRCA2", frequency: "3.2" },
            { gene: "APC", frequency: "2.8" },
            { gene: "PIK3CA", frequency: "2.5" }
        ],
        cnv: {
            amplifications: [
                { gene: "MYC", frequency: "8.5" },
                { gene: "AR", frequency: "3.2" },
                { gene: "BRAF", frequency: "2.8" },
                { gene: "PIK3CA", frequency: "2.5" },
                { gene: "CCND1", frequency: "2.2" }
            ],
            deletions: [
                { gene: "PTEN", frequency: "18.5" },
                { gene: "CHD1", frequency: "12.8" },
                { gene: "RB1", frequency: "8.2" },
                { gene: "BRCA2", frequency: "5.5" },
                { gene: "TP53", frequency: "4.8" }
            ]
        },
        clinical: {
            medianAge: 62,
            malePercent: 100,
            femalePercent: 0,
            medianTMB: 0.9
        }
    },
    "Melanoma": {
        displayName: "Melanoma",
        studyId: "skcm_tcga",
        sampleCount: 448,
        histologyImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Melanoma.jpg/512px-Melanoma.jpg",
        histologyCaption: "Malignant melanoma - H&E stain",
        mutations: [
            { gene: "BRAF", frequency: "48.5" },
            { gene: "NRAS", frequency: "25.8" },
            { gene: "TP53", frequency: "18.2" },
            { gene: "CDKN2A", frequency: "12.5" },
            { gene: "NF1", frequency: "12.2" },
            { gene: "PTEN", frequency: "8.5" },
            { gene: "ARID2", frequency: "7.8" },
            { gene: "PPP6C", frequency: "6.5" },
            { gene: "RAC1", frequency: "5.8" },
            { gene: "MAP2K1", frequency: "5.2" }
        ],
        cnv: {
            amplifications: [
                { gene: "MITF", frequency: "15.2" },
                { gene: "CCND1", frequency: "12.8" },
                { gene: "TERT", frequency: "10.5" },
                { gene: "CDK4", frequency: "8.2" },
                { gene: "BRAF", frequency: "6.5" }
            ],
            deletions: [
                { gene: "CDKN2A", frequency: "42.5" },
                { gene: "PTEN", frequency: "15.8" },
                { gene: "TP53", frequency: "8.2" },
                { gene: "ARID1A", frequency: "5.5" },
                { gene: "NF1", frequency: "4.8" }
            ]
        },
        clinical: {
            medianAge: 58,
            malePercent: 62,
            femalePercent: 38,
            medianTMB: 12.5
        }
    },
    "Ovarian Cancer": {
        displayName: "Ovarian Cancer",
        studyId: "ov_tcga",
        sampleCount: 585,
        histologyImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Serous_carcinoma_2a_-_cytology.jpg/512px-Serous_carcinoma_2a_-_cytology.jpg",
        histologyCaption: "High-grade serous ovarian carcinoma",
        mutations: [
            { gene: "TP53", frequency: "96.2" },
            { gene: "BRCA1", frequency: "8.5" },
            { gene: "BRCA2", frequency: "6.2" },
            { gene: "NF1", frequency: "4.8" },
            { gene: "RB1", frequency: "3.5" },
            { gene: "CDK12", frequency: "3.2" },
            { gene: "CSMD3", frequency: "2.8" },
            { gene: "FAT3", frequency: "2.5" },
            { gene: "GABRA6", frequency: "2.2" },
            { gene: "CDK12", frequency: "2.0" }
        ],
        cnv: {
            amplifications: [
                { gene: "CCNE1", frequency: "22.5" },
                { gene: "MYC", frequency: "35.2" },
                { gene: "MECOM", frequency: "18.5" },
                { gene: "ERBB2", frequency: "6.8" },
                { gene: "AKT2", frequency: "5.5" }
            ],
            deletions: [
                { gene: "RB1", frequency: "12.5" },
                { gene: "PTEN", frequency: "8.8" },
                { gene: "NF1", frequency: "7.2" },
                { gene: "BRCA1", frequency: "6.5" },
                { gene: "BRCA2", frequency: "5.8" }
            ]
        },
        clinical: {
            medianAge: 59,
            malePercent: 0,
            femalePercent: 100,
            medianTMB: 2.2
        }
    },
    "Glioblastoma": {
        displayName: "Glioblastoma",
        studyId: "gbm_tcga",
        sampleCount: 592,
        histologyImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Glioblastoma_%281%29.jpg/512px-Glioblastoma_%281%29.jpg",
        histologyCaption: "Glioblastoma multiforme - H&E stain",
        mutations: [
            { gene: "PTEN", frequency: "28.5" },
            { gene: "TP53", frequency: "28.2" },
            { gene: "EGFR", frequency: "26.8" },
            { gene: "NF1", frequency: "10.5" },
            { gene: "PIK3CA", frequency: "8.2" },
            { gene: "PIK3R1", frequency: "7.8" },
            { gene: "RB1", frequency: "6.5" },
            { gene: "ATRX", frequency: "5.8" },
            { gene: "IDH1", frequency: "5.2" },
            { gene: "PDGFRA", frequency: "4.8" }
        ],
        cnv: {
            amplifications: [
                { gene: "EGFR", frequency: "45.2" },
                { gene: "CDK4", frequency: "18.5" },
                { gene: "PDGFRA", frequency: "15.2" },
                { gene: "MDM2", frequency: "12.8" },
                { gene: "MDM4", frequency: "8.5" }
            ],
            deletions: [
                { gene: "CDKN2A", frequency: "55.8" },
                { gene: "PTEN", frequency: "38.2" },
                { gene: "RB1", frequency: "8.5" },
                { gene: "NF1", frequency: "6.2" },
                { gene: "TP53", frequency: "5.5" }
            ]
        },
        clinical: {
            medianAge: 59,
            malePercent: 59,
            femalePercent: 41,
            medianTMB: 2.5
        }
    },
    "Head and Neck Cancer": {
        displayName: "Head and Neck Cancer",
        studyId: "hnsc_tcga",
        sampleCount: 523,
        histologyImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Squamous_Cell_Carcinoma.jpg/512px-Squamous_Cell_Carcinoma.jpg",
        histologyCaption: "Head and neck squamous cell carcinoma - H&E stain",
        mutations: [
            { gene: "TP53", frequency: "68.5" },
            { gene: "CDKN2A", frequency: "22.2" },
            { gene: "FAT1", frequency: "18.8" },
            { gene: "NOTCH1", frequency: "18.2" },
            { gene: "PIK3CA", frequency: "16.5" },
            { gene: "KMT2D", frequency: "14.2" },
            { gene: "NSD1", frequency: "10.5" },
            { gene: "CASP8", frequency: "9.8" },
            { gene: "HRAS", frequency: "5.5" },
            { gene: "PTEN", frequency: "5.2" }
        ],
        cnv: {
            amplifications: [
                { gene: "CCND1", frequency: "28.5" },
                { gene: "FADD", frequency: "22.2" },
                { gene: "TP63", frequency: "18.5" },
                { gene: "PIK3CA", frequency: "15.8" },
                { gene: "EGFR", frequency: "12.5" }
            ],
            deletions: [
                { gene: "CDKN2A", frequency: "32.5" },
                { gene: "FAT1", frequency: "8.5" },
                { gene: "NOTCH1", frequency: "6.2" },
                { gene: "PTEN", frequency: "5.8" },
                { gene: "RB1", frequency: "4.5" }
            ]
        },
        clinical: {
            medianAge: 61,
            malePercent: 73,
            femalePercent: 27,
            medianTMB: 4.8
        }
    },
    "Kidney Clear Cell Carcinoma": {
        displayName: "Kidney Clear Cell Carcinoma",
        studyId: "kirc_tcga",
        sampleCount: 534,
        histologyImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Clear_cell_renal_cell_carcinoma_high_mag.jpg/512px-Clear_cell_renal_cell_carcinoma_high_mag.jpg",
        histologyCaption: "Clear cell renal cell carcinoma - H&E stain",
        mutations: [
            { gene: "VHL", frequency: "52.8" },
            { gene: "PBRM1", frequency: "32.5" },
            { gene: "SETD2", frequency: "12.8" },
            { gene: "BAP1", frequency: "10.2" },
            { gene: "MTOR", frequency: "8.5" },
            { gene: "KDM5C", frequency: "7.2" },
            { gene: "PTEN", frequency: "5.8" },
            { gene: "TP53", frequency: "4.5" },
            { gene: "PIK3CA", frequency: "3.8" },
            { gene: "ARID1A", frequency: "3.2" }
        ],
        cnv: {
            amplifications: [
                { gene: "MYC", frequency: "8.5" },
                { gene: "SQSTM1", frequency: "5.2" },
                { gene: "MDM4", frequency: "4.8" },
                { gene: "JAK2", frequency: "3.5" },
                { gene: "CCND1", frequency: "2.8" }
            ],
            deletions: [
                { gene: "VHL", frequency: "22.5" },
                { gene: "CDKN2A", frequency: "12.8" },
                { gene: "PBRM1", frequency: "10.5" },
                { gene: "SETD2", frequency: "8.2" },
                { gene: "BAP1", frequency: "6.5" }
            ]
        },
        clinical: {
            medianAge: 60,
            malePercent: 65,
            femalePercent: 35,
            medianTMB: 1.2
        }
    },
    "Liver Cancer": {
        displayName: "Liver Cancer",
        studyId: "lihc_tcga",
        sampleCount: 372,
        histologyImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Hepatocellular_carcinoma_1.jpg/512px-Hepatocellular_carcinoma_1.jpg",
        histologyCaption: "Hepatocellular carcinoma - H&E stain",
        mutations: [
            { gene: "TP53", frequency: "28.5" },
            { gene: "CTNNB1", frequency: "25.8" },
            { gene: "AXIN1", frequency: "8.5" },
            { gene: "ARID1A", frequency: "8.2" },
            { gene: "ARID2", frequency: "6.5" },
            { gene: "ALB", frequency: "5.8" },
            { gene: "APOB", frequency: "5.2" },
            { gene: "BAP1", frequency: "4.5" },
            { gene: "NFE2L2", frequency: "4.2" },
            { gene: "KEAP1", frequency: "3.8" }
        ],
        cnv: {
            amplifications: [
                { gene: "TERT", frequency: "18.5" },
                { gene: "MYC", frequency: "15.2" },
                { gene: "CCND1", frequency: "12.8" },
                { gene: "FGF19", frequency: "10.5" },
                { gene: "VEGFA", frequency: "8.2" }
            ],
            deletions: [
                { gene: "CDKN2A", frequency: "15.5" },
                { gene: "RB1", frequency: "8.8" },
                { gene: "PTEN", frequency: "6.5" },
                { gene: "ARID1A", frequency: "5.2" },
                { gene: "TP53", frequency: "4.8" }
            ]
        },
        clinical: {
            medianAge: 61,
            malePercent: 68,
            femalePercent: 32,
            medianTMB: 1.8
        }
    },
    "Stomach Cancer": {
        displayName: "Stomach Cancer",
        studyId: "stad_tcga",
        sampleCount: 440,
        histologyImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Adenocarcinoma_of_the_stomach.jpg/512px-Adenocarcinoma_of_the_stomach.jpg",
        histologyCaption: "Gastric adenocarcinoma - H&E stain",
        mutations: [
            { gene: "TP53", frequency: "48.2" },
            { gene: "ARID1A", frequency: "18.5" },
            { gene: "CDH1", frequency: "12.8" },
            { gene: "PIK3CA", frequency: "12.5" },
            { gene: "KRAS", frequency: "8.8" },
            { gene: "RHOA", frequency: "6.5" },
            { gene: "APC", frequency: "6.2" },
            { gene: "SMAD4", frequency: "5.5" },
            { gene: "ERBB3", frequency: "5.2" },
            { gene: "CTNNB1", frequency: "4.8" }
        ],
        cnv: {
            amplifications: [
                { gene: "ERBB2", frequency: "18.5" },
                { gene: "CCNE1", frequency: "15.2" },
                { gene: "MYC", frequency: "12.8" },
                { gene: "EGFR", frequency: "8.5" },
                { gene: "CCND1", frequency: "6.2" }
            ],
            deletions: [
                { gene: "CDKN2A", frequency: "22.5" },
                { gene: "SMAD4", frequency: "12.8" },
                { gene: "PTEN", frequency: "8.5" },
                { gene: "ARID1A", frequency: "6.2" },
                { gene: "RB1", frequency: "4.8" }
            ]
        },
        clinical: {
            medianAge: 66,
            malePercent: 65,
            femalePercent: 35,
            medianTMB: 3.8
        }
    },
    "Bladder Cancer": {
        displayName: "Bladder Cancer",
        studyId: "blca_tcga",
        sampleCount: 412,
        histologyImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Urothelial_carcinoma_of_the_urinary_bladder_%28high_grade%29.jpg/512px-Urothelial_carcinoma_of_the_urinary_bladder_%28high_grade%29.jpg",
        histologyCaption: "High-grade urothelial carcinoma - H&E stain",
        mutations: [
            { gene: "TP53", frequency: "48.5" },
            { gene: "KDM6A", frequency: "24.2" },
            { gene: "ARID1A", frequency: "22.8" },
            { gene: "PIK3CA", frequency: "20.5" },
            { gene: "RB1", frequency: "15.2" },
            { gene: "KMT2D", frequency: "14.8" },
            { gene: "FGFR3", frequency: "14.2" },
            { gene: "ELF3", frequency: "12.5" },
            { gene: "CDKN1A", frequency: "10.8" },
            { gene: "ERBB2", frequency: "10.2" }
        ],
        cnv: {
            amplifications: [
                { gene: "PPARG", frequency: "18.5" },
                { gene: "E2F3", frequency: "15.8" },
                { gene: "CCND1", frequency: "12.5" },
                { gene: "ERBB2", frequency: "10.2" },
                { gene: "EGFR", frequency: "8.5" }
            ],
            deletions: [
                { gene: "CDKN2A", frequency: "35.2" },
                { gene: "RB1", frequency: "18.5" },
                { gene: "PTEN", frequency: "8.2" },
                { gene: "ARID1A", frequency: "6.5" },
                { gene: "WWOX", frequency: "5.8" }
            ]
        },
        clinical: {
            medianAge: 68,
            malePercent: 74,
            femalePercent: 26,
            medianTMB: 5.5
        }
    },
    "Endometrial Cancer": {
        displayName: "Endometrial Cancer",
        studyId: "ucec_tcga",
        sampleCount: 529,
        histologyImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Endometrioid_endometrial_adenocarcinoma_high_mag.jpg/512px-Endometrioid_endometrial_adenocarcinoma_high_mag.jpg",
        histologyCaption: "Endometrioid endometrial adenocarcinoma - H&E stain",
        mutations: [
            { gene: "PTEN", frequency: "64.2" },
            { gene: "PIK3CA", frequency: "48.5" },
            { gene: "PIK3R1", frequency: "32.8" },
            { gene: "ARID1A", frequency: "32.5" },
            { gene: "TP53", frequency: "28.2" },
            { gene: "CTNNB1", frequency: "22.5" },
            { gene: "KRAS", frequency: "18.8" },
            { gene: "CTCF", frequency: "15.2" },
            { gene: "RPL22", frequency: "12.8" },
            { gene: "FGFR2", frequency: "11.5" }
        ],
        cnv: {
            amplifications: [
                { gene: "MYC", frequency: "12.8" },
                { gene: "ERBB2", frequency: "8.5" },
                { gene: "CCNE1", frequency: "6.2" },
                { gene: "PIK3CA", frequency: "5.5" },
                { gene: "FGFR3", frequency: "4.2" }
            ],
            deletions: [
                { gene: "PTEN", frequency: "18.5" },
                { gene: "ARID1A", frequency: "10.2" },
                { gene: "CDKN2A", frequency: "8.5" },
                { gene: "RB1", frequency: "5.8" },
                { gene: "TP53", frequency: "4.5" }
            ]
        },
        clinical: {
            medianAge: 64,
            malePercent: 0,
            femalePercent: 100,
            medianTMB: 3.2
        }
    },
    "Pancreatic Cancer": {
        displayName: "Pancreatic Cancer",
        studyId: "paad_tcga",
        sampleCount: 185,
        histologyImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Pancreatic_adenocarcinoma_%282%29_Case_01.jpg/512px-Pancreatic_adenocarcinoma_%282%29_Case_01.jpg",
        histologyCaption: "Pancreatic ductal adenocarcinoma - H&E stain",
        mutations: [
            { gene: "KRAS", frequency: "92.5" },
            { gene: "TP53", frequency: "68.2" },
            { gene: "SMAD4", frequency: "25.8" },
            { gene: "CDKN2A", frequency: "22.5" },
            { gene: "ARID1A", frequency: "8.5" },
            { gene: "RNF43", frequency: "6.2" },
            { gene: "TGFBR2", frequency: "5.5" },
            { gene: "GNAS", frequency: "5.2" },
            { gene: "KMT2D", frequency: "4.8" },
            { gene: "BRCA2", frequency: "4.2" }
        ],
        cnv: {
            amplifications: [
                { gene: "MYC", frequency: "12.8" },
                { gene: "GATA6", frequency: "8.5" },
                { gene: "ERBB2", frequency: "5.2" },
                { gene: "AKT2", frequency: "4.5" },
                { gene: "CCND1", frequency: "3.8" }
            ],
            deletions: [
                { gene: "CDKN2A", frequency: "32.5" },
                { gene: "SMAD4", frequency: "28.2" },
                { gene: "TP53", frequency: "15.8" },
                { gene: "ARID1A", frequency: "8.2" },
                { gene: "PTEN", frequency: "5.5" }
            ]
        },
        clinical: {
            medianAge: 65,
            malePercent: 55,
            femalePercent: 45,
            medianTMB: 1.2
        }
    },
    "Thyroid Cancer": {
        displayName: "Thyroid Cancer",
        studyId: "thca_tcga",
        sampleCount: 507,
        histologyImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Papillary_thyroid_carcinoma_tall_cell_var_high_mag.jpg/512px-Papillary_thyroid_carcinoma_tall_cell_var_high_mag.jpg",
        histologyCaption: "Papillary thyroid carcinoma - H&E stain",
        mutations: [
            { gene: "BRAF", frequency: "58.5" },
            { gene: "NRAS", frequency: "8.2" },
            { gene: "HRAS", frequency: "3.5" },
            { gene: "EIF1AX", frequency: "3.2" },
            { gene: "KRAS", frequency: "1.8" },
            { gene: "TG", frequency: "1.5" },
            { gene: "TSHR", frequency: "1.2" },
            { gene: "PPM1D", frequency: "1.0" },
            { gene: "CHEK2", frequency: "0.8" },
            { gene: "APC", frequency: "0.6" }
        ],
        cnv: {
            amplifications: [
                { gene: "TERT", frequency: "5.2" },
                { gene: "EGFR", frequency: "2.8" },
                { gene: "VEGFA", frequency: "2.2" },
                { gene: "MYC", frequency: "1.8" },
                { gene: "CCND1", frequency: "1.2" }
            ],
            deletions: [
                { gene: "CDKN2A", frequency: "3.5" },
                { gene: "PTEN", frequency: "2.2" },
                { gene: "TP53", frequency: "1.5" },
                { gene: "RB1", frequency: "1.0" },
                { gene: "NF1", frequency: "0.8" }
            ]
        },
        clinical: {
            medianAge: 46,
            malePercent: 27,
            femalePercent: 73,
            medianTMB: 0.4
        }
    },
    "Cervical Cancer": {
        displayName: "Cervical Cancer",
        studyId: "cesc_tcga",
        sampleCount: 297,
        histologyImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Cervical_squamous_cell_carcinoma_histopathology.jpg/512px-Cervical_squamous_cell_carcinoma_histopathology.jpg",
        histologyCaption: "Cervical squamous cell carcinoma - H&E stain",
        mutations: [
            { gene: "PIK3CA", frequency: "28.5" },
            { gene: "EP300", frequency: "12.8" },
            { gene: "FBXW7", frequency: "12.5" },
            { gene: "TP53", frequency: "10.2" },
            { gene: "KRAS", frequency: "8.5" },
            { gene: "HLA-A", frequency: "6.8" },
            { gene: "HLA-B", frequency: "6.2" },
            { gene: "PTEN", frequency: "5.5" },
            { gene: "NFE2L2", frequency: "5.2" },
            { gene: "ARID1A", frequency: "4.8" }
        ],
        cnv: {
            amplifications: [
                { gene: "PIK3CA", frequency: "18.5" },
                { gene: "MYC", frequency: "15.2" },
                { gene: "EGFR", frequency: "8.5" },
                { gene: "ERBB2", frequency: "6.2" },
                { gene: "CCND1", frequency: "5.5" }
            ],
            deletions: [
                { gene: "CDKN2A", frequency: "12.8" },
                { gene: "PTEN", frequency: "6.5" },
                { gene: "STK11", frequency: "4.2" },
                { gene: "RB1", frequency: "3.8" },
                { gene: "TGFBR2", frequency: "2.5" }
            ]
        },
        clinical: {
            medianAge: 46,
            malePercent: 0,
            femalePercent: 100,
            medianTMB: 3.5
        }
    },
    "Sarcoma": {
        displayName: "Sarcoma",
        studyId: "sarc_tcga",
        sampleCount: 261,
        histologyImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Leiomyosarcoma_of_the_adrenal_vein.jpg/512px-Leiomyosarcoma_of_the_adrenal_vein.jpg",
        histologyCaption: "Soft tissue sarcoma - H&E stain",
        mutations: [
            { gene: "TP53", frequency: "35.2" },
            { gene: "ATRX", frequency: "22.5" },
            { gene: "RB1", frequency: "15.8" },
            { gene: "NF1", frequency: "8.5" },
            { gene: "PTEN", frequency: "6.2" },
            { gene: "PIK3CA", frequency: "5.5" },
            { gene: "CDKN2A", frequency: "4.8" },
            { gene: "KMT2D", frequency: "4.2" },
            { gene: "LAMA2", frequency: "3.8" },
            { gene: "SETD2", frequency: "3.2" }
        ],
        cnv: {
            amplifications: [
                { gene: "MDM2", frequency: "15.8" },
                { gene: "CDK4", frequency: "15.2" },
                { gene: "HMGA2", frequency: "12.5" },
                { gene: "JUN", frequency: "8.5" },
                { gene: "MYC", frequency: "6.2" }
            ],
            deletions: [
                { gene: "RB1", frequency: "22.5" },
                { gene: "CDKN2A", frequency: "18.8" },
                { gene: "TP53", frequency: "12.5" },
                { gene: "ATRX", frequency: "8.2" },
                { gene: "PTEN", frequency: "6.5" }
            ]
        },
        clinical: {
            medianAge: 61,
            malePercent: 48,
            femalePercent: 52,
            medianTMB: 1.5
        }
    },
    "Low Grade Glioma": {
        displayName: "Low Grade Glioma",
        studyId: "lgg_tcga",
        sampleCount: 516,
        histologyImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Oligodendroglioma_histology.jpg/512px-Oligodendroglioma_histology.jpg",
        histologyCaption: "Low grade glioma (oligodendroglioma) - H&E stain",
        mutations: [
            { gene: "IDH1", frequency: "78.5" },
            { gene: "TP53", frequency: "48.2" },
            { gene: "ATRX", frequency: "38.5" },
            { gene: "CIC", frequency: "22.8" },
            { gene: "FUBP1", frequency: "12.5" },
            { gene: "NOTCH1", frequency: "8.2" },
            { gene: "PIK3CA", frequency: "6.5" },
            { gene: "IDH2", frequency: "5.8" },
            { gene: "PIK3R1", frequency: "5.2" },
            { gene: "NF1", frequency: "4.5" }
        ],
        cnv: {
            amplifications: [
                { gene: "MYC", frequency: "6.5" },
                { gene: "CDK4", frequency: "5.2" },
                { gene: "EGFR", frequency: "4.5" },
                { gene: "MDM2", frequency: "3.8" },
                { gene: "PDGFRA", frequency: "3.2" }
            ],
            deletions: [
                { gene: "CDKN2A", frequency: "22.5" },
                { gene: "CIC", frequency: "15.8" },
                { gene: "FUBP1", frequency: "12.2" },
                { gene: "RB1", frequency: "8.5" },
                { gene: "PTEN", frequency: "5.2" }
            ]
        },
        clinical: {
            medianAge: 41,
            malePercent: 53,
            femalePercent: 47,
            medianTMB: 0.8
        }
    },
    "Testicular Cancer": {
        displayName: "Testicular Cancer",
        studyId: "tgct_tcga",
        sampleCount: 150,
        histologyImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Seminoma_high_mag.jpg/512px-Seminoma_high_mag.jpg",
        histologyCaption: "Testicular seminoma - H&E stain",
        mutations: [
            { gene: "KIT", frequency: "18.5" },
            { gene: "KRAS", frequency: "12.2" },
            { gene: "NRAS", frequency: "5.8" },
            { gene: "TP53", frequency: "4.5" },
            { gene: "BRAF", frequency: "3.2" },
            { gene: "PIK3CA", frequency: "2.8" },
            { gene: "AKT1", frequency: "2.2" },
            { gene: "PTEN", frequency: "1.8" },
            { gene: "CTNNB1", frequency: "1.5" },
            { gene: "CDC27", frequency: "1.2" }
        ],
        cnv: {
            amplifications: [
                { gene: "KIT", frequency: "22.5" },
                { gene: "KRAS", frequency: "15.8" },
                { gene: "CCND2", frequency: "12.5" },
                { gene: "MDM2", frequency: "8.2" },
                { gene: "NANOG", frequency: "6.5" }
            ],
            deletions: [
                { gene: "CDKN2A", frequency: "5.2" },
                { gene: "PTEN", frequency: "3.8" },
                { gene: "RB1", frequency: "2.5" },
                { gene: "TP53", frequency: "2.2" },
                { gene: "SMAD4", frequency: "1.8" }
            ]
        },
        clinical: {
            medianAge: 31,
            malePercent: 100,
            femalePercent: 0,
            medianTMB: 0.5
        }
    },
    "Esophageal Cancer": {
        displayName: "Esophageal Cancer",
        studyId: "esca_tcga",
        sampleCount: 185,
        histologyImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Esophageal_adenocarcinoma_%282%29.jpg/512px-Esophageal_adenocarcinoma_%282%29.jpg",
        histologyCaption: "Esophageal carcinoma - H&E stain",
        mutations: [
            { gene: "TP53", frequency: "72.5" },
            { gene: "CDKN2A", frequency: "15.8" },
            { gene: "NFE2L2", frequency: "12.2" },
            { gene: "NOTCH1", frequency: "10.5" },
            { gene: "PIK3CA", frequency: "8.8" },
            { gene: "KMT2D", frequency: "8.2" },
            { gene: "FAT1", frequency: "7.5" },
            { gene: "ERBB2", frequency: "6.8" },
            { gene: "SMAD4", frequency: "5.5" },
            { gene: "ARID1A", frequency: "5.2" }
        ],
        cnv: {
            amplifications: [
                { gene: "CCND1", frequency: "38.5" },
                { gene: "SOX2", frequency: "28.2" },
                { gene: "TP63", frequency: "22.5" },
                { gene: "ERBB2", frequency: "18.8" },
                { gene: "EGFR", frequency: "15.2" }
            ],
            deletions: [
                { gene: "CDKN2A", frequency: "42.5" },
                { gene: "SMAD4", frequency: "15.8" },
                { gene: "PTEN", frequency: "8.5" },
                { gene: "RB1", frequency: "6.2" },
                { gene: "ARID1A", frequency: "5.5" }
            ]
        },
        clinical: {
            medianAge: 62,
            malePercent: 82,
            femalePercent: 18,
            medianTMB: 5.2
        }
    },
    "Kidney Papillary Carcinoma": {
        displayName: "Kidney Papillary Carcinoma",
        studyId: "kirp_tcga",
        sampleCount: 292,
        histologyImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Papillary_renal_cell_carcinoma_-_high_mag.jpg/512px-Papillary_renal_cell_carcinoma_-_high_mag.jpg",
        histologyCaption: "Papillary renal cell carcinoma - H&E stain",
        mutations: [
            { gene: "MET", frequency: "12.5" },
            { gene: "SETD2", frequency: "8.8" },
            { gene: "NF2", frequency: "6.5" },
            { gene: "KMT2C", frequency: "5.8" },
            { gene: "FAT1", frequency: "5.2" },
            { gene: "BAP1", frequency: "4.5" },
            { gene: "PBRM1", frequency: "4.2" },
            { gene: "STAG2", frequency: "3.8" },
            { gene: "NFE2L2", frequency: "3.2" },
            { gene: "TP53", frequency: "2.8" }
        ],
        cnv: {
            amplifications: [
                { gene: "MET", frequency: "18.5" },
                { gene: "MYC", frequency: "8.2" },
                { gene: "EGFR", frequency: "5.5" },
                { gene: "CCND1", frequency: "4.2" },
                { gene: "MDM2", frequency: "3.5" }
            ],
            deletions: [
                { gene: "CDKN2A", frequency: "18.2" },
                { gene: "SETD2", frequency: "12.5" },
                { gene: "BAP1", frequency: "8.8" },
                { gene: "NF2", frequency: "6.5" },
                { gene: "PTEN", frequency: "5.2" }
            ]
        },
        clinical: {
            medianAge: 61,
            malePercent: 73,
            femalePercent: 27,
            medianTMB: 1.0
        }
    },
    "Cholangiocarcinoma": {
        displayName: "Cholangiocarcinoma",
        studyId: "chol_tcga",
        sampleCount: 51,
        histologyImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Cholangiocarcinoma_-_high_mag.jpg/512px-Cholangiocarcinoma_-_high_mag.jpg",
        histologyCaption: "Cholangiocarcinoma - H&E stain",
        mutations: [
            { gene: "IDH1", frequency: "22.5" },
            { gene: "KRAS", frequency: "18.8" },
            { gene: "TP53", frequency: "18.2" },
            { gene: "ARID1A", frequency: "15.5" },
            { gene: "BAP1", frequency: "12.8" },
            { gene: "PBRM1", frequency: "10.2" },
            { gene: "SMAD4", frequency: "8.5" },
            { gene: "IDH2", frequency: "6.2" },
            { gene: "EPHA2", frequency: "5.5" },
            { gene: "PIK3CA", frequency: "4.8" }
        ],
        cnv: {
            amplifications: [
                { gene: "ERBB2", frequency: "12.5" },
                { gene: "MCL1", frequency: "8.8" },
                { gene: "MDM2", frequency: "6.2" },
                { gene: "MYC", frequency: "5.5" },
                { gene: "CCND1", frequency: "4.2" }
            ],
            deletions: [
                { gene: "CDKN2A", frequency: "22.5" },
                { gene: "BAP1", frequency: "15.8" },
                { gene: "PBRM1", frequency: "12.2" },
                { gene: "ARID1A", frequency: "8.5" },
                { gene: "SMAD4", frequency: "6.8" }
            ]
        },
        clinical: {
            medianAge: 63,
            malePercent: 45,
            femalePercent: 55,
            medianTMB: 1.3
        }
    },
    "Adrenocortical Carcinoma": {
        displayName: "Adrenocortical Carcinoma",
        studyId: "acc_tcga",
        sampleCount: 92,
        histologyImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Adrenal_cortical_carcinoma_-_high_mag.jpg/512px-Adrenal_cortical_carcinoma_-_high_mag.jpg",
        histologyCaption: "Adrenocortical carcinoma - H&E stain",
        mutations: [
            { gene: "TP53", frequency: "18.5" },
            { gene: "CTNNB1", frequency: "15.2" },
            { gene: "ZNRF3", frequency: "12.8" },
            { gene: "PRKAR1A", frequency: "8.5" },
            { gene: "MEN1", frequency: "6.2" },
            { gene: "DAXX", frequency: "5.5" },
            { gene: "TERT", frequency: "4.8" },
            { gene: "RB1", frequency: "4.2" },
            { gene: "APC", frequency: "3.5" },
            { gene: "MED12", frequency: "2.8" }
        ],
        cnv: {
            amplifications: [
                { gene: "TERT", frequency: "18.5" },
                { gene: "CDK4", frequency: "12.2" },
                { gene: "MDM2", frequency: "8.5" },
                { gene: "MYC", frequency: "6.8" },
                { gene: "CCNE1", frequency: "5.2" }
            ],
            deletions: [
                { gene: "CDKN2A", frequency: "25.8" },
                { gene: "RB1", frequency: "15.2" },
                { gene: "ZNRF3", frequency: "12.5" },
                { gene: "TP53", frequency: "10.8" },
                { gene: "DAXX", frequency: "6.2" }
            ]
        },
        clinical: {
            medianAge: 47,
            malePercent: 35,
            femalePercent: 65,
            medianTMB: 1.8
        }
    },
    "Pheochromocytoma": {
        displayName: "Pheochromocytoma",
        studyId: "pcpg_tcga",
        sampleCount: 179,
        histologyImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Pheochromocytoma_high_mag.jpg/512px-Pheochromocytoma_high_mag.jpg",
        histologyCaption: "Pheochromocytoma - H&E stain",
        mutations: [
            { gene: "HRAS", frequency: "8.5" },
            { gene: "RET", frequency: "6.2" },
            { gene: "VHL", frequency: "5.5" },
            { gene: "NF1", frequency: "4.8" },
            { gene: "EPAS1", frequency: "4.2" },
            { gene: "ATRX", frequency: "3.8" },
            { gene: "CSDE1", frequency: "3.2" },
            { gene: "TP53", frequency: "2.5" },
            { gene: "MEN1", frequency: "2.2" },
            { gene: "SDHB", frequency: "1.8" }
        ],
        cnv: {
            amplifications: [
                { gene: "MDM2", frequency: "5.2" },
                { gene: "TERT", frequency: "4.5" },
                { gene: "MYC", frequency: "3.8" },
                { gene: "CCND1", frequency: "2.5" },
                { gene: "CDK4", frequency: "2.2" }
            ],
            deletions: [
                { gene: "VHL", frequency: "12.5" },
                { gene: "CDKN2A", frequency: "8.8" },
                { gene: "SDHB", frequency: "6.5" },
                { gene: "NF1", frequency: "5.2" },
                { gene: "ATRX", frequency: "4.5" }
            ]
        },
        clinical: {
            medianAge: 47,
            malePercent: 43,
            femalePercent: 57,
            medianTMB: 0.6
        }
    }
};

const CANCER_TYPES = Object.keys(CANCER_DATA);
