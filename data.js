// data.js

const CANCER_DATA = {
    "Breast Invasive Carcinoma": {
        mutations: [
            { gene: "PIK3CA", frequency: 36 },
            { gene: "TP53", frequency: 33 },
            { gene: "CDH1", frequency: 11 },
            { gene: "GATA3", frequency: 11 },
            { gene: "MAP3K1", frequency: 8 },
            { gene: "KMT2C", frequency: 7 },
            { gene: "AKT1", frequency: 4 },
            { gene: "PTEN", frequency: 4 },
            { gene: "CBFB", frequency: 4 },
            { gene: "TBX3", frequency: 4 }
        ],
        cnv: {
            amplifications: ["ERBB2", "CCND1", "FGFR1", "MYC", "MDM2"],
            deletions: ["PTEN", "RB1", "MAP2K4", "CDKN2A", "NF1"]
        },
        clinical: { male: 1, female: 99, medianAge: 58, tmb: 2.6, survival5yr: 90 },
        histology: {
            url: "https://placehold.co/300x200/f5f5f5/333?text=Breast+Carcinoma",
            caption: "Invasive ductal carcinoma showing irregular nests of malignant cells"
        }
    },
    "Lung Adenocarcinoma": {
        mutations: [
            { gene: "TP53", frequency: 46 },
            { gene: "KRAS", frequency: 33 },
            { gene: "KEAP1", frequency: 19 },
            { gene: "STK11", frequency: 17 },
            { gene: "EGFR", frequency: 14 },
            { gene: "NF1", frequency: 11 },
            { gene: "BRAF", frequency: 10 },
            { gene: "SETD2", frequency: 9 },
            { gene: "RBM10", frequency: 8 },
            { gene: "MGA", frequency: 8 }
        ],
        cnv: {
            amplifications: ["TERT", "MYC", "EGFR", "NKX2-1", "KRAS"],
            deletions: ["CDKN2A", "STK11", "KEAP1", "PTPRD", "NF1"]
        },
        clinical: { male: 53, female: 47, medianAge: 65, tmb: 8.1, survival5yr: 22 },
        histology: {
            url: "https://placehold.co/300x200/f5f5f5/333?text=Lung+Adenocarcinoma",
            caption: "Lung adenocarcinoma with glandular/acinar growth pattern"
        }
    },
    "Lung Squamous Cell Carcinoma": {
        mutations: [
            { gene: "TP53", frequency: 81 },
            { gene: "CDKN2A", frequency: 18 },
            { gene: "KEAP1", frequency: 12 },
            { gene: "NFE2L2", frequency: 15 },
            { gene: "PIK3CA", frequency: 16 },
            { gene: "PTEN", frequency: 8 },
            { gene: "RB1", frequency: 7 },
            { gene: "NOTCH1", frequency: 8 },
            { gene: "KMT2D", frequency: 20 },
            { gene: "FAT1", frequency: 12 }
        ],
        cnv: {
            amplifications: ["SOX2", "PIK3CA", "FGFR1", "CCND1", "EGFR"],
            deletions: ["CDKN2A", "PTEN", "RB1", "NOTCH1", "FAT1"]
        },
        clinical: { male: 74, female: 26, medianAge: 68, tmb: 11.4, survival5yr: 20 },
        histology: {
            url: "https://placehold.co/300x200/f5f5f5/333?text=Lung+Squamous",
            caption: "Squamous cell carcinoma with keratinization and intercellular bridges"
        }
    },
    "Colorectal Adenocarcinoma": {
        mutations: [
            { gene: "APC", frequency: 81 },
            { gene: "TP53", frequency: 60 },
            { gene: "KRAS", frequency: 43 },
            { gene: "PIK3CA", frequency: 18 },
            { gene: "FBXW7", frequency: 11 },
            { gene: "SMAD4", frequency: 10 },
            { gene: "TCF7L2", frequency: 9 },
            { gene: "NRAS", frequency: 5 },
            { gene: "BRAF", frequency: 9 },
            { gene: "SOX9", frequency: 9 }
        ],
        cnv: {
            amplifications: ["MYC", "ERBB2", "IGF2", "EGFR", "CCNE1"],
            deletions: ["SMAD4", "APC", "PTEN", "TP53", "CDKN2A"]
        },
        clinical: { male: 53, female: 47, medianAge: 66, tmb: 5.8, survival5yr: 65 },
        histology: {
            url: "https://placehold.co/300x200/f5f5f5/333?text=Colorectal",
            caption: "Colorectal adenocarcinoma with irregular glandular structures"
        }
    },
    "Prostate Adenocarcinoma": {
        mutations: [
            { gene: "SPOP", frequency: 11 },
            { gene: "TP53", frequency: 8 },
            { gene: "FOXA1", frequency: 4 },
            { gene: "PTEN", frequency: 4 },
            { gene: "ATM", frequency: 4 },
            { gene: "MED12", frequency: 4 },
            { gene: "CDK12", frequency: 2 },
            { gene: "APC", frequency: 3 },
            { gene: "BRCA2", frequency: 2 },
            { gene: "PIK3CA", frequency: 2 }
        ],
        cnv: {
            amplifications: ["MYC", "AR", "CCND1", "ERG", "PIK3CA"],
            deletions: ["PTEN", "RB1", "BRCA2", "CHD1", "NKX3-1"]
        },
        clinical: { male: 100, female: 0, medianAge: 61, tmb: 1.1, survival5yr: 98 },
        histology: {
            url: "https://placehold.co/300x200/f5f5f5/333?text=Prostate",
            caption: "Prostatic adenocarcinoma with small acinar pattern (Gleason)"
        }
    },
    "Skin Cutaneous Melanoma": {
        mutations: [
            { gene: "BRAF", frequency: 50 },
            { gene: "NRAS", frequency: 27 },
            { gene: "TP53", frequency: 16 },
            { gene: "NF1", frequency: 14 },
            { gene: "CDKN2A", frequency: 12 },
            { gene: "PTEN", frequency: 8 },
            { gene: "KIT", frequency: 3 },
            { gene: "RAC1", frequency: 5 },
            { gene: "PPP6C", frequency: 8 },
            { gene: "DDX3X", frequency: 6 }
        ],
        cnv: {
            amplifications: ["BRAF", "MITF", "CCND1", "MYC", "TERT"],
            deletions: ["CDKN2A", "PTEN", "NF1", "ARID2", "TP53"]
        },
        clinical: { male: 62, female: 38, medianAge: 58, tmb: 18.2, survival5yr: 93 },
        histology: {
            url: "https://placehold.co/300x200/f5f5f5/333?text=Melanoma",
            caption: "Cutaneous melanoma with atypical melanocytes and pigmentation"
        }
    },
    "Ovarian Serous Cystadenocarcinoma": {
        mutations: [
            { gene: "TP53", frequency: 96 },
            { gene: "BRCA1", frequency: 9 },
            { gene: "BRCA2", frequency: 6 },
            { gene: "NF1", frequency: 4 },
            { gene: "RB1", frequency: 2 },
            { gene: "CDK12", frequency: 3 },
            { gene: "FAT3", frequency: 6 },
            { gene: "GABRA6", frequency: 4 },
            { gene: "CSMD3", frequency: 6 },
            { gene: "HMCN1", frequency: 5 }
        ],
        cnv: {
            amplifications: ["MYC", "CCNE1", "MECOM", "ERBB2", "PIK3CA"],
            deletions: ["PTEN", "RB1", "NF1", "BRCA1", "BRCA2"]
        },
        clinical: { male: 0, female: 100, medianAge: 59, tmb: 3.5, survival5yr: 47 },
        histology: {
            url: "https://placehold.co/300x200/f5f5f5/333?text=Ovarian+Serous",
            caption: "High-grade serous ovarian carcinoma with papillary architecture"
        }
    },
    "Glioblastoma Multiforme": {
        mutations: [
            { gene: "PTEN", frequency: 33 },
            { gene: "TP53", frequency: 28 },
            { gene: "EGFR", frequency: 26 },
            { gene: "PIK3R1", frequency: 11 },
            { gene: "NF1", frequency: 10 },
            { gene: "PIK3CA", frequency: 7 },
            { gene: "RB1", frequency: 8 },
            { gene: "IDH1", frequency: 6 },
            { gene: "ATRX", frequency: 7 },
            { gene: "PDGFRA", frequency: 5 }
        ],
        cnv: {
            amplifications: ["EGFR", "CDK4", "PDGFRA", "MDM2", "MET"],
            deletions: ["CDKN2A", "PTEN", "RB1", "NF1", "TP53"]
        },
        clinical: { male: 59, female: 41, medianAge: 59, tmb: 2.8, survival5yr: 5 },
        histology: {
            url: "https://placehold.co/300x200/f5f5f5/333?text=Glioblastoma",
            caption: "Glioblastoma with pseudopalisading necrosis and microvascular proliferation"
        }
    },
    "Head and Neck Squamous Cell Carcinoma": {
        mutations: [
            { gene: "TP53", frequency: 72 },
            { gene: "CDKN2A", frequency: 22 },
            { gene: "FAT1", frequency: 23 },
            { gene: "NOTCH1", frequency: 19 },
            { gene: "PIK3CA", frequency: 18 },
            { gene: "KMT2D", frequency: 15 },
            { gene: "CASP8", frequency: 11 },
            { gene: "NSD1", frequency: 10 },
            { gene: "HRAS", frequency: 5 },
            { gene: "TGFBR2", frequency: 5 }
        ],
        cnv: {
            amplifications: ["CCND1", "FADD", "CTTN", "EGFR", "MYC"],
            deletions: ["CDKN2A", "FAT1", "NOTCH1", "TP53", "SMAD4"]
        },
        clinical: { male: 73, female: 27, medianAge: 61, tmb: 6.2, survival5yr: 66 },
        histology: {
            url: "https://placehold.co/300x200/f5f5f5/333?text=Head+Neck+SCC",
            caption: "Head and neck SCC with invasive islands of squamous epithelium"
        }
    },
    "Kidney Renal Clear Cell Carcinoma": {
        mutations: [
            { gene: "VHL", frequency: 52 },
            { gene: "PBRM1", frequency: 33 },
            { gene: "SETD2", frequency: 12 },
            { gene: "BAP1", frequency: 10 },
            { gene: "MTOR", frequency: 7 },
            { gene: "KDM5C", frequency: 6 },
            { gene: "TP53", frequency: 3 },
            { gene: "PIK3CA", frequency: 3 },
            { gene: "PTEN", frequency: 4 },
            { gene: "TCEB1", frequency: 3 }
        ],
        cnv: {
            amplifications: ["MYC", "CCND1", "MDM4", "JAK2", "VEGFA"],
            deletions: ["VHL", "CDKN2A", "PBRM1", "SETD2", "BAP1"]
        },
        clinical: { male: 65, female: 35, medianAge: 60, tmb: 1.4, survival5yr: 74 },
        histology: {
            url: "https://placehold.co/300x200/f5f5f5/333?text=Kidney+Clear+Cell",
            caption: "Clear cell RCC with clear cytoplasm and delicate vasculature"
        }
    },
    "Liver Hepatocellular Carcinoma": {
        mutations: [
            { gene: "TP53", frequency: 31 },
            { gene: "CTNNB1", frequency: 27 },
            { gene: "AXIN1", frequency: 8 },
            { gene: "ARID1A", frequency: 7 },
            { gene: "ARID2", frequency: 5 },
            { gene: "NFE2L2", frequency: 5 },
            { gene: "ALB", frequency: 5 },
            { gene: "APOB", frequency: 5 },
            { gene: "BAP1", frequency: 3 },
            { gene: "RPS6KA3", frequency: 4 }
        ],
        cnv: {
            amplifications: ["MYC", "CCND1", "FGF19", "TERT", "MET"],
            deletions: ["CDKN2A", "AXIN1", "RB1", "PTEN", "TP53"]
        },
        clinical: { male: 68, female: 32, medianAge: 61, tmb: 4.1, survival5yr: 20 },
        histology: {
            url: "https://placehold.co/300x200/f5f5f5/333?text=Liver+HCC",
            caption: "Hepatocellular carcinoma with trabecular pattern and bile production"
        }
    },
    "Stomach Adenocarcinoma": {
        mutations: [
            { gene: "TP53", frequency: 48 },
            { gene: "CDH1", frequency: 11 },
            { gene: "ARID1A", frequency: 14 },
            { gene: "PIK3CA", frequency: 12 },
            { gene: "KRAS", frequency: 9 },
            { gene: "RHOA", frequency: 5 },
            { gene: "APC", frequency: 8 },
            { gene: "SMAD4", frequency: 5 },
            { gene: "ERBB3", frequency: 8 },
            { gene: "CTNNB1", frequency: 5 }
        ],
        cnv: {
            amplifications: ["ERBB2", "CCNE1", "MYC", "EGFR", "VEGFA"],
            deletions: ["CDKN2A", "SMAD4", "PTEN", "ARID1A", "RB1"]
        },
        clinical: { male: 65, female: 35, medianAge: 66, tmb: 5.2, survival5yr: 32 },
        histology: {
            url: "https://placehold.co/300x200/f5f5f5/333?text=Stomach",
            caption: "Gastric adenocarcinoma with signet ring cells and glandular differentiation"
        }
    },
    "Bladder Urothelial Carcinoma": {
        mutations: [
            { gene: "TP53", frequency: 48 },
            { gene: "KMT2D", frequency: 28 },
            { gene: "ARID1A", frequency: 25 },
            { gene: "PIK3CA", frequency: 22 },
            { gene: "KDM6A", frequency: 22 },
            { gene: "RB1", frequency: 17 },
            { gene: "ELF3", frequency: 12 },
            { gene: "FGFR3", frequency: 12 },
            { gene: "STAG2", frequency: 11 },
            { gene: "ERBB2", frequency: 9 }
        ],
        cnv: {
            amplifications: ["CCND1", "ERBB2", "E2F3", "PPARG", "EGFR"],
            deletions: ["CDKN2A", "RB1", "PTEN", "FHIT", "WWOX"]
        },
        clinical: { male: 74, female: 26, medianAge: 69, tmb: 8.6, survival5yr: 77 },
        histology: {
            url: "https://placehold.co/300x200/f5f5f5/333?text=Bladder",
            caption: "High-grade urothelial carcinoma with nuclear pleomorphism"
        }
    },
    "Uterine Corpus Endometrial Carcinoma": {
        mutations: [
            { gene: "PTEN", frequency: 65 },
            { gene: "PIK3CA", frequency: 53 },
            { gene: "ARID1A", frequency: 33 },
            { gene: "TP53", frequency: 28 },
            { gene: "PIK3R1", frequency: 21 },
            { gene: "CTNNB1", frequency: 18 },
            { gene: "KRAS", frequency: 18 },
            { gene: "CTCF", frequency: 16 },
            { gene: "FGFR2", frequency: 12 },
            { gene: "RPL22", frequency: 11 }
        ],
        cnv: {
            amplifications: ["MYC", "ERBB2", "CCNE1", "PIK3CA", "FGFR3"],
            deletions: ["PTEN", "ARID1A", "RB1", "CDKN2A", "TP53"]
        },
        clinical: { male: 0, female: 100, medianAge: 64, tmb: 6.4, survival5yr: 81 },
        histology: {
            url: "https://placehold.co/300x200/f5f5f5/333?text=Endometrial",
            caption: "Endometrioid adenocarcinoma with back-to-back glands"
        }
    },
    "Pancreatic Adenocarcinoma": {
        mutations: [
            { gene: "KRAS", frequency: 93 },
            { gene: "TP53", frequency: 72 },
            { gene: "SMAD4", frequency: 32 },
            { gene: "CDKN2A", frequency: 30 },
            { gene: "ARID1A", frequency: 6 },
            { gene: "TGFBR2", frequency: 5 },
            { gene: "RNF43", frequency: 5 },
            { gene: "GNAS", frequency: 8 },
            { gene: "BRCA2", frequency: 3 },
            { gene: "KMT2D", frequency: 3 }
        ],
        cnv: {
            amplifications: ["MYC", "KRAS", "GATA6", "ERBB2", "AKT2"],
            deletions: ["CDKN2A", "SMAD4", "TP53", "ARID1A", "PTEN"]
        },
        clinical: { male: 56, female: 44, medianAge: 65, tmb: 1.8, survival5yr: 10 },
        histology: {
            url: "https://placehold.co/300x200/f5f5f5/333?text=Pancreatic",
            caption: "Pancreatic ductal adenocarcinoma with desmoplastic stroma"
        }
    },
    "Thyroid Carcinoma": {
        mutations: [
            { gene: "BRAF", frequency: 60 },
            { gene: "NRAS", frequency: 8 },
            { gene: "HRAS", frequency: 4 },
            { gene: "EIF1AX", frequency: 2 },
            { gene: "PTEN", frequency: 1 },
            { gene: "TP53", frequency: 1 },
            { gene: "TSHR", frequency: 2 },
            { gene: "AKT1", frequency: 1 },
            { gene: "PIK3CA", frequency: 1 },
            { gene: "TERT", frequency: 9 }
        ],
        cnv: {
            amplifications: ["TERT", "MYC", "CCND1", "EGFR", "VEGFA"],
            deletions: ["CDKN2A", "PTEN", "TP53", "RB1", "NF1"]
        },
        clinical: { male: 27, female: 73, medianAge: 46, tmb: 0.5, survival5yr: 98 },
        histology: {
            url: "https://placehold.co/300x200/f5f5f5/333?text=Thyroid",
            caption: "Papillary thyroid carcinoma with nuclear grooves and pseudoinclusions"
        }
    },
    "Cervical Squamous Cell Carcinoma": {
        mutations: [
            { gene: "PIK3CA", frequency: 26 },
            { gene: "EP300", frequency: 9 },
            { gene: "FBXW7", frequency: 8 },
            { gene: "PTEN", frequency: 6 },
            { gene: "TP53", frequency: 5 },
            { gene: "NFE2L2", frequency: 5 },
            { gene: "KRAS", frequency: 4 },
            { gene: "ARID1A", frequency: 4 },
            { gene: "MAPK1", frequency: 4 },
            { gene: "HLA-B", frequency: 9 }
        ],
        cnv: {
            amplifications: ["PIK3CA", "MYC", "TERC", "CD274", "ERBB2"],
            deletions: ["TGFBR2", "SMAD4", "PTEN", "RB1", "LRP1B"]
        },
        clinical: { male: 0, female: 100, medianAge: 46, tmb: 5.1, survival5yr: 66 },
        histology: {
            url: "https://placehold.co/300x200/f5f5f5/333?text=Cervical",
            caption: "Cervical SCC with invasive squamous epithelium and keratin pearls"
        }
    },
    "Sarcoma": {
        mutations: [
            { gene: "TP53", frequency: 34 },
            { gene: "ATRX", frequency: 22 },
            { gene: "RB1", frequency: 14 },
            { gene: "MED12", frequency: 8 },
            { gene: "NF1", frequency: 6 },
            { gene: "PTEN", frequency: 4 },
            { gene: "PIK3CA", frequency: 4 },
            { gene: "CDKN2A", frequency: 3 },
            { gene: "KMT2D", frequency: 5 },
            { gene: "SETD2", frequency: 4 }
        ],
        cnv: {
            amplifications: ["MDM2", "CDK4", "TERT", "MYC", "JUN"],
            deletions: ["RB1", "CDKN2A", "PTEN", "TP53", "NF1"]
        },
        clinical: { male: 49, female: 51, medianAge: 61, tmb: 2.3, survival5yr: 55 },
        histology: {
            url: "https://placehold.co/300x200/f5f5f5/333?text=Sarcoma",
            caption: "Sarcoma with pleomorphic spindle cells and mitotic figures"
        }
    },
    "Brain Lower Grade Glioma": {
        mutations: [
            { gene: "IDH1", frequency: 77 },
            { gene: "TP53", frequency: 49 },
            { gene: "ATRX", frequency: 42 },
            { gene: "CIC", frequency: 20 },
            { gene: "FUBP1", frequency: 9 },
            { gene: "NOTCH1", frequency: 8 },
            { gene: "PIK3CA", frequency: 7 },
            { gene: "PIK3R1", frequency: 7 },
            { gene: "NF1", frequency: 4 },
            { gene: "PTEN", frequency: 3 }
        ],
        cnv: {
            amplifications: ["MYC", "EGFR", "CDK4", "PDGFRA", "MDM4"],
            deletions: ["CDKN2A", "PTEN", "CIC", "FUBP1", "RB1"]
        },
        clinical: { male: 54, female: 46, medianAge: 41, tmb: 1.2, survival5yr: 72 },
        histology: {
            url: "https://placehold.co/300x200/f5f5f5/333?text=Low+Grade+Glioma",
            caption: "Low grade glioma with uniform round nuclei and perinuclear halos"
        }
    },
    "Testicular Germ Cell Tumors": {
        mutations: [
            { gene: "KIT", frequency: 18 },
            { gene: "KRAS", frequency: 14 },
            { gene: "NRAS", frequency: 4 },
            { gene: "TP53", frequency: 2 },
            { gene: "BRAF", frequency: 1 },
            { gene: "PIK3CA", frequency: 1 },
            { gene: "AKT1", frequency: 1 },
            { gene: "CTNNB1", frequency: 2 },
            { gene: "STK11", frequency: 1 },
            { gene: "CDC27", frequency: 8 }
        ],
        cnv: {
            amplifications: ["KRAS", "KIT", "CCND2", "MDM2", "MYCN"],
            deletions: ["PTEN", "RB1", "TP53", "CDKN2A", "NF1"]
        },
        clinical: { male: 100, female: 0, medianAge: 31, tmb: 0.4, survival5yr: 95 },
        histology: {
            url: "https://placehold.co/300x200/f5f5f5/333?text=Testicular",
            caption: "Seminoma with clear cells, distinct borders, and lymphocytic infiltrate"
        }
    },
    "Esophageal Carcinoma": {
        mutations: [
            { gene: "TP53", frequency: 72 },
            { gene: "NFE2L2", frequency: 10 },
            { gene: "CDKN2A", frequency: 12 },
            { gene: "NOTCH1", frequency: 10 },
            { gene: "PIK3CA", frequency: 6 },
            { gene: "KMT2D", frequency: 8 },
            { gene: "FAT1", frequency: 7 },
            { gene: "ERBB2", frequency: 3 },
            { gene: "RB1", frequency: 6 },
            { gene: "EP300", frequency: 4 }
        ],
        cnv: {
            amplifications: ["CCND1", "FGF19", "ERBB2", "EGFR", "MYC"],
            deletions: ["CDKN2A", "SMAD4", "RB1", "PTEN", "NOTCH1"]
        },
        clinical: { male: 82, female: 18, medianAge: 62, tmb: 6.8, survival5yr: 20 },
        histology: {
            url: "https://placehold.co/300x200/f5f5f5/333?text=Esophageal",
            caption: "Esophageal carcinoma with invasive glands or squamous nests"
        }
    },
    "Kidney Renal Papillary Cell Carcinoma": {
        mutations: [
            { gene: "MET", frequency: 13 },
            { gene: "SETD2", frequency: 10 },
            { gene: "NF2", frequency: 6 },
            { gene: "KMT2C", frequency: 5 },
            { gene: "FAT1", frequency: 5 },
            { gene: "BAP1", frequency: 4 },
            { gene: "PBRM1", frequency: 3 },
            { gene: "TP53", frequency: 2 },
            { gene: "SMARCB1", frequency: 3 },
            { gene: "ARID2", frequency: 3 }
        ],
        cnv: {
            amplifications: ["MET", "MYC", "CCND1", "EGFR", "ERBB2"],
            deletions: ["CDKN2A", "VHL", "SETD2", "NF2", "BAP1"]
        },
        clinical: { male: 73, female: 27, medianAge: 61, tmb: 1.3, survival5yr: 91 },
        histology: {
            url: "https://placehold.co/300x200/f5f5f5/333?text=Kidney+Papillary",
            caption: "Papillary RCC with papillary architecture and foamy macrophages"
        }
    },
    "Cholangiocarcinoma": {
        mutations: [
            { gene: "TP53", frequency: 36 },
            { gene: "KRAS", frequency: 22 },
            { gene: "IDH1", frequency: 18 },
            { gene: "ARID1A", frequency: 14 },
            { gene: "BAP1", frequency: 13 },
            { gene: "PBRM1", frequency: 11 },
            { gene: "SMAD4", frequency: 9 },
            { gene: "PIK3CA", frequency: 5 },
            { gene: "EPHA2", frequency: 4 },
            { gene: "STK11", frequency: 3 }
        ],
        cnv: {
            amplifications: ["ERBB2", "MYC", "MCL1", "CCND1", "MDM2"],
            deletions: ["CDKN2A", "BAP1", "PTEN", "BRCA2", "ARID1A"]
        },
        clinical: { male: 57, female: 43, medianAge: 65, tmb: 2.1, survival5yr: 10 },
        histology: {
            url: "https://placehold.co/300x200/f5f5f5/333?text=Cholangiocarcinoma",
            caption: "Cholangiocarcinoma with irregular glands in desmoplastic stroma"
        }
    },
    "Adrenocortical Carcinoma": {
        mutations: [
            { gene: "TP53", frequency: 21 },
            { gene: "CTNNB1", frequency: 16 },
            { gene: "ZNRF3", frequency: 16 },
            { gene: "DAXX", frequency: 6 },
            { gene: "MEN1", frequency: 7 },
            { gene: "PRKAR1A", frequency: 5 },
            { gene: "RB1", frequency: 4 },
            { gene: "APC", frequency: 3 },
            { gene: "CDKN2A", frequency: 3 },
            { gene: "NF1", frequency: 3 }
        ],
        cnv: {
            amplifications: ["TERT", "IGF2", "CDK4", "MDM2", "CCNE1"],
            deletions: ["CDKN2A", "TP53", "RB1", "ZNRF3", "DAXX"]
        },
        clinical: { male: 41, female: 59, medianAge: 48, tmb: 2.4, survival5yr: 35 },
        histology: {
            url: "https://placehold.co/300x200/f5f5f5/333?text=Adrenocortical",
            caption: "Adrenocortical carcinoma with pleomorphic cells and high mitotic rate"
        }
    },
    "Pheochromocytoma and Paraganglioma": {
        mutations: [
            { gene: "SDHB", frequency: 16 },
            { gene: "SDHD", frequency: 9 },
            { gene: "VHL", frequency: 9 },
            { gene: "RET", frequency: 6 },
            { gene: "NF1", frequency: 6 },
            { gene: "HRAS", frequency: 5 },
            { gene: "SDHC", frequency: 2 },
            { gene: "SDHA", frequency: 3 },
            { gene: "EPAS1", frequency: 4 },
            { gene: "MAX", frequency: 3 }
        ],
        cnv: {
            amplifications: ["MYCN", "MDM2", "MYC", "TERT", "CDK4"],
            deletions: ["SDHB", "SDHD", "VHL", "NF1", "CDKN2A"]
        },
        clinical: { male: 43, female: 57, medianAge: 46, tmb: 0.6, survival5yr: 85 },
        histology: {
            url: "https://placehold.co/300x200/f5f5f5/333?text=Pheochromocytoma",
            caption: "Pheochromocytoma with Zellballen pattern and granular cytoplasm"
        }
    }
};
