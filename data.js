const CANCER_DATA = {
  "Breast Carcinoma": {
    mutations: [
      { gene: "PIK3CA", freq: 34 },
      { gene: "TP53", freq: 33 },
      { gene: "CDH1", freq: 11 },
      { gene: "GATA3", freq: 10 },
      { gene: "MAP3K1", freq: 8 },
      { gene: "KMT2C", freq: 7 },
      { gene: "AKT1", freq: 4 },
      { gene: "PTEN", freq: 4 },
      { gene: "CBFB", freq: 4 },
      { gene: "NF1", freq: 3 }
    ],
    amplifications: [
      { gene: "ERBB2", freq: 18 },
      { gene: "CCND1", freq: 16 },
      { gene: "FGF19", freq: 14 },
      { gene: "MYC", freq: 12 },
      { gene: "MDM2", freq: 5 }
    ],
    deletions: [
      { gene: "CDKN2A", freq: 8 },
      { gene: "PTEN", freq: 5 },
      { gene: "RB1", freq: 4 },
      { gene: "MAP2K4", freq: 3 },
      { gene: "NF1", freq: 2 }
    ],
    clinical: {
      male: 1,
      female: 99,
      medianAge: 58,
      tmb: 1.5,
      survival5yr: 90
    },
    histology: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Breast_cancer_cells_%281%29.jpg/220px-Breast_cancer_cells_%281%29.jpg"
  },
  
  "Lung Adenocarcinoma": {
    mutations: [
      { gene: "TP53", freq: 46 },
      { gene: "KRAS", freq: 33 },
      { gene: "KEAP1", freq: 19 },
      { gene: "STK11", freq: 17 },
      { gene: "EGFR", freq: 14 },
      { gene: "NF1", freq: 11 },
      { gene: "BRAF", freq: 10 },
      { gene: "SETD2", freq: 9 },
      { gene: "RBM10", freq: 8 },
      { gene: "MGA", freq: 8 }
    ],
    amplifications: [
      { gene: "TERT", freq: 18 },
      { gene: "MYC", freq: 12 },
      { gene: "EGFR", freq: 11 },
      { gene: "NKX2-1", freq: 10 },
      { gene: "MDM2", freq: 7 }
    ],
    deletions: [
      { gene: "CDKN2A", freq: 25 },
      { gene: "STK11", freq: 12 },
      { gene: "KEAP1", freq: 8 },
      { gene: "PTEN", freq: 5 },
      { gene: "RB1", freq: 4 }
    ],
    clinical: {
      male: 47,
      female: 53,
      medianAge: 65,
      tmb: 8.1,
      survival5yr: 22
    },
    histology: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Pie_chart_of_lung_cancers_-_small.png/220px-Pie_chart_of_lung_cancers_-_small.png"
  },
  
  "Lung Squamous Cell Carcinoma": {
    mutations: [
      { gene: "TP53", freq: 81 },
      { gene: "CDKN2A", freq: 18 },
      { gene: "NFE2L2", freq: 16 },
      { gene: "KEAP1", freq: 12 },
      { gene: "PIK3CA", freq: 12 },
      { gene: "KMT2D", freq: 11 },
      { gene: "PTEN", freq: 10 },
      { gene: "NF1", freq: 9 },
      { gene: "RB1", freq: 8 },
      { gene: "NOTCH1", freq: 8 }
    ],
    amplifications: [
      { gene: "SOX2", freq: 45 },
      { gene: "PIK3CA", freq: 30 },
      { gene: "TP63", freq: 25 },
      { gene: "FGFR1", freq: 20 },
      { gene: "EGFR", freq: 10 }
    ],
    deletions: [
      { gene: "CDKN2A", freq: 45 },
      { gene: "PTEN", freq: 15 },
      { gene: "RB1", freq: 10 },
      { gene: "NOTCH1", freq: 5 },
      { gene: "FAT1", freq: 4 }
    ],
    clinical: {
      male: 74,
      female: 26,
      medianAge: 68,
      tmb: 10.2,
      survival5yr: 18
    },
    histology: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Lung_squridge.jpg/220px-Lung_squridge.jpg"
  },
  
  "Colorectal Adenocarcinoma": {
    mutations: [
      { gene: "APC", freq: 75 },
      { gene: "TP53", freq: 60 },
      { gene: "KRAS", freq: 43 },
      { gene: "PIK3CA", freq: 18 },
      { gene: "FBXW7", freq: 11 },
      { gene: "SMAD4", freq: 10 },
      { gene: "TCF7L2", freq: 9 },
      { gene: "NRAS", freq: 8 },
      { gene: "BRAF", freq: 8 },
      { gene: "SOX9", freq: 7 }
    ],
    amplifications: [
      { gene: "ERBB2", freq: 7 },
      { gene: "IGF2", freq: 6 },
      { gene: "MYC", freq: 5 },
      { gene: "EGFR", freq: 4 },
      { gene: "CCNE1", freq: 3 }
    ],
    deletions: [
      { gene: "SMAD4", freq: 18 },
      { gene: "APC", freq: 10 },
      { gene: "PTEN", freq: 8 },
      { gene: "CDKN2A", freq: 5 },
      { gene: "TP53", freq: 4 }
    ],
    clinical: {
      male: 53,
      female: 47,
      medianAge: 66,
      tmb: 4.5,
      survival5yr: 65
    },
    histology: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Colon_cancer_1.jpg/220px-Colon_cancer_1.jpg"
  },
  
  "Prostate Adenocarcinoma": {
    mutations: [
      { gene: "SPOP", freq: 11 },
      { gene: "TP53", freq: 10 },
      { gene: "FOXA1", freq: 9 },
      { gene: "PTEN", freq: 8 },
      { gene: "KMT2D", freq: 6 },
      { gene: "ATM", freq: 5 },
      { gene: "MED12", freq: 5 },
      { gene: "CDK12", freq: 4 },
      { gene: "KMT2C", freq: 4 },
      { gene: "APC", freq: 3 }
    ],
    amplifications: [
      { gene: "AR", freq: 4 },
      { gene: "MYC", freq: 3 },
      { gene: "NCOA2", freq: 2 },
      { gene: "PIK3CA", freq: 2 },
      { gene: "BRAF", freq: 1 }
    ],
    deletions: [
      { gene: "PTEN", freq: 17 },
      { gene: "CHD1", freq: 10 },
      { gene: "RB1", freq: 5 },
      { gene: "BRCA2", freq: 4 },
      { gene: "TP53", freq: 3 }
    ],
    clinical: {
      male: 100,
      female: 0,
      medianAge: 61,
      tmb: 1.0,
      survival5yr: 98
    },
    histology: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Prostate_adenocarcinoma_with_perineural_invasion.jpg/220px-Prostate_adenocarcinoma_with_perineural_invasion.jpg"
  },
  
  "Cutaneous Melanoma": {
    mutations: [
      { gene: "BRAF", freq: 52 },
      { gene: "NRAS", freq: 28 },
      { gene: "TP53", freq: 16 },
      { gene: "CDKN2A", freq: 15 },
      { gene: "NF1", freq: 14 },
      { gene: "PTEN", freq: 12 },
      { gene: "ARID2", freq: 11 },
      { gene: "PPP6C", freq: 9 },
      { gene: "RAC1", freq: 7 },
      { gene: "MAP2K1", freq: 6 }
    ],
    amplifications: [
      { gene: "MITF", freq: 15 },
      { gene: "CCND1", freq: 12 },
      { gene: "TERT", freq: 10 },
      { gene: "BRAF", freq: 8 },
      { gene: "MDM2", freq: 5 }
    ],
    deletions: [
      { gene: "CDKN2A", freq: 50 },
      { gene: "PTEN", freq: 25 },
      { gene: "TP53", freq: 8 },
      { gene: "NF1", freq: 6 },
      { gene: "RB1", freq: 4 }
    ],
    clinical: {
      male: 62,
      female: 38,
      medianAge: 58,
      tmb: 18.0,
      survival5yr: 93
    },
    histology: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Melanoma_vs_normal_skin.jpg/220px-Melanoma_vs_normal_skin.jpg"
  },
  
  "Ovarian Serous Carcinoma": {
    mutations: [
      { gene: "TP53", freq: 96 },
      { gene: "BRCA1", freq: 12 },
      { gene: "BRCA2", freq: 11 },
      { gene: "NF1", freq: 8 },
      { gene: "RB1", freq: 6 },
      { gene: "CDK12", freq: 5 },
      { gene: "CSMD3", freq: 5 },
      { gene: "FAT3", freq: 4 },
      { gene: "GABRA6", freq: 4 },
      { gene: "CREBBP", freq: 3 }
    ],
    amplifications: [
      { gene: "CCNE1", freq: 25 },
      { gene: "MYC", freq: 22 },
      { gene: "MECOM", freq: 15 },
      { gene: "KRAS", freq: 10 },
      { gene: "PIK3CA", freq: 8 }
    ],
    deletions: [
      { gene: "PTEN", freq: 18 },
      { gene: "RB1", freq: 15 },
      { gene: "NF1", freq: 12 },
      { gene: "RAD51B", freq: 8 },
      { gene: "CDKN2A", freq: 5 }
    ],
    clinical: {
      male: 0,
      female: 100,
      medianAge: 60,
      tmb: 2.5,
      survival5yr: 47
    },
    histology: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Serous_carcinoma_cytology.jpg/220px-Serous_carcinoma_cytology.jpg"
  },
  
  "Glioblastoma Multiforme": {
    mutations: [
      { gene: "PTEN", freq: 33 },
      { gene: "TP53", freq: 31 },
      { gene: "EGFR", freq: 26 },
      { gene: "PIK3R1", freq: 11 },
      { gene: "NF1", freq: 10 },
      { gene: "RB1", freq: 8 },
      { gene: "PIK3CA", freq: 7 },
      { gene: "IDH1", freq: 6 },
      { gene: "ATRX", freq: 5 },
      { gene: "PDGFRA", freq: 5 }
    ],
    amplifications: [
      { gene: "EGFR", freq: 55 },
      { gene: "CDK4", freq: 18 },
      { gene: "MDM2", freq: 15 },
      { gene: "PDGFRA", freq: 13 },
      { gene: "MET", freq: 5 }
    ],
    deletions: [
      { gene: "CDKN2A", freq: 60 },
      { gene: "PTEN", freq: 40 },
      { gene: "RB1", freq: 10 },
      { gene: "NF1", freq: 8 },
      { gene: "TP53", freq: 5 }
    ],
    clinical: {
      male: 59,
      female: 41,
      medianAge: 60,
      tmb: 2.0,
      survival5yr: 5
    },
    histology: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Glioblastoma_-_MR_sagittal_with_contrast.jpg/220px-Glioblastoma_-_MR_sagittal_with_contrast.jpg"
  },
  
  "Head and Neck Squamous Cell Carcinoma": {
    mutations: [
      { gene: "TP53", freq: 72 },
      { gene: "CDKN2A", freq: 22 },
      { gene: "FAT1", freq: 20 },
      { gene: "NOTCH1", freq: 18 },
      { gene: "PIK3CA", freq: 18 },
      { gene: "KMT2D", freq: 15 },
      { gene: "NSD1", freq: 10 },
      { gene: "CASP8", freq: 9 },
      { gene: "HRAS", freq: 8 },
      { gene: "NFE2L2", freq: 7 }
    ],
    amplifications: [
      { gene: "CCND1", freq: 25 },
      { gene: "FADD", freq: 18 },
      { gene: "MYC", freq: 12 },
      { gene: "EGFR", freq: 10 },
      { gene: "PIK3CA", freq: 8 }
    ],
    deletions: [
      { gene: "CDKN2A", freq: 35 },
      { gene: "FAT1", freq: 12 },
      { gene: "NOTCH1", freq: 8 },
      { gene: "TP53", freq: 5 },
      { gene: "PTEN", freq: 4 }
    ],
    clinical: {
      male: 74,
      female: 26,
      medianAge: 61,
      tmb: 5.0,
      survival5yr: 50
    },
    histology: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Biopsy_of_a_highly_differentiated_squamous_cell_carcinoma_of_the_mouth.jpg/220px-Biopsy_of_a_highly_differentiated_squamous_cell_carcinoma_of_the_mouth.jpg"
  },
  
  "Kidney Clear Cell Carcinoma": {
    mutations: [
      { gene: "VHL", freq: 52 },
      { gene: "PBRM1", freq: 33 },
      { gene: "SETD2", freq: 12 },
      { gene: "BAP1", freq: 10 },
      { gene: "KDM5C", freq: 7 },
      { gene: "PTEN", freq: 5 },
      { gene: "MTOR", freq: 5 },
      { gene: "TP53", freq: 4 },
      { gene: "PIK3CA", freq: 3 },
      { gene: "ARID1A", freq: 3 }
    ],
    amplifications: [
      { gene: "MYC", freq: 8 },
      { gene: "CCND1", freq: 5 },
      { gene: "MDM4", freq: 4 },
      { gene: "JAK2", freq: 3 },
      { gene: "EGFR", freq: 2 }
    ],
    deletions: [
      { gene: "VHL", freq: 30 },
      { gene: "CDKN2A", freq: 10 },
      { gene: "PBRM1", freq: 8 },
      { gene: "SETD2", freq: 6 },
      { gene: "BAP1", freq: 5 }
    ],
    clinical: {
      male: 65,
      female: 35,
      medianAge: 61,
      tmb: 1.5,
      survival5yr: 74
    },
    histology: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Clear_cell_renal_cell_carcinoma_high_mag_cropped.jpg/220px-Clear_cell_renal_cell_carcinoma_high_mag_cropped.jpg"
  },
  
  "Hepatocellular Carcinoma": {
    mutations: [
      { gene: "TP53", freq: 31 },
      { gene: "CTNNB1", freq: 27 },
      { gene: "AXIN1", freq: 10 },
      { gene: "ARID1A", freq: 9 },
      { gene: "ALB", freq: 8 },
      { gene: "ARID2", freq: 7 },
      { gene: "NFE2L2", freq: 6 },
      { gene: "KEAP1", freq: 5 },
      { gene: "RB1", freq: 4 },
      { gene: "PIK3CA", freq: 4 }
    ],
    amplifications: [
      { gene: "CCND1", freq: 12 },
      { gene: "FGF19", freq: 10 },
      { gene: "VEGFA", freq: 8 },
      { gene: "MYC", freq: 8 },
      { gene: "MET", freq: 5 }
    ],
    deletions: [
      { gene: "CDKN2A", freq: 15 },
      { gene: "AXIN1", freq: 8 },
      { gene: "RB1", freq: 8 },
      { gene: "PTEN", freq: 6 },
      { gene: "IRF2", freq: 4 }
    ],
    clinical: {
      male: 74,
      female: 26,
      medianAge: 61,
      tmb: 4.0,
      survival5yr: 20
    },
    histology: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Hepatocellular_carcinoma_1.jpg/220px-Hepatocellular_carcinoma_1.jpg"
  },
  
  "Stomach Adenocarcinoma": {
    mutations: [
      { gene: "TP53", freq: 48 },
      { gene: "CDH1", freq: 12 },
      { gene: "ARID1A", freq: 12 },
      { gene: "PIK3CA", freq: 10 },
      { gene: "KMT2D", freq: 9 },
      { gene: "KRAS", freq: 8 },
      { gene: "RHOA", freq: 7 },
      { gene: "APC", freq: 6 },
      { gene: "SMAD4", freq: 5 },
      { gene: "ERBB3", freq: 5 }
    ],
    amplifications: [
      { gene: "ERBB2", freq: 15 },
      { gene: "CCNE1", freq: 12 },
      { gene: "VEGFA", freq: 10 },
      { gene: "KRAS", freq: 8 },
      { gene: "MYC", freq: 8 }
    ],
    deletions: [
      { gene: "CDKN2A", freq: 20 },
      { gene: "SMAD4", freq: 10 },
      { gene: "PTEN", freq: 8 },
      { gene: "RB1", freq: 5 },
      { gene: "ARID1A", freq: 4 }
    ],
    clinical: {
      male: 65,
      female: 35,
      medianAge: 66,
      tmb: 3.5,
      survival5yr: 32
    },
    histology: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Adenocarcinoma_of_the_stomach.jpg/220px-Adenocarcinoma_of_the_stomach.jpg"
  },
  
  "Bladder Urothelial Carcinoma": {
    mutations: [
      { gene: "TP53", freq: 48 },
      { gene: "KDM6A", freq: 26 },
      { gene: "ARID1A", freq: 25 },
      { gene: "KMT2D", freq: 25 },
      { gene: "PIK3CA", freq: 22 },
      { gene: "RB1", freq: 17 },
      { gene: "ELF3", freq: 12 },
      { gene: "FGFR3", freq: 12 },
      { gene: "STAG2", freq: 11 },
      { gene: "ERBB2", freq: 10 }
    ],
    amplifications: [
      { gene: "PPARG", freq: 15 },
      { gene: "E2F3", freq: 12 },
      { gene: "EGFR", freq: 10 },
      { gene: "ERBB2", freq: 8 },
      { gene: "CCND1", freq: 8 }
    ],
    deletions: [
      { gene: "CDKN2A", freq: 35 },
      { gene: "RB1", freq: 15 },
      { gene: "PTEN", freq: 8 },
      { gene: "WWOX", freq: 6 },
      { gene: "CREBBP", freq: 5 }
    ],
    clinical: {
      male: 74,
      female: 26,
      medianAge: 69,
      tmb: 7.0,
      survival5yr: 77
    },
    histology: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Urothelial_carcinoma_of_the_urinary_bladder%2C_biopsy%2C_H%26E%2C_4x.jpg/220px-Urothelial_carcinoma_of_the_urinary_bladder%2C_biopsy%2C_H%26E%2C_4x.jpg"
  },
  
  "Endometrial Carcinoma": {
    mutations: [
      { gene: "PTEN", freq: 66 },
      { gene: "PIK3CA", freq: 52 },
      { gene: "PIK3R1", freq: 33 },
      { gene: "ARID1A", freq: 33 },
      { gene: "TP53", freq: 28 },
      { gene: "CTNNB1", freq: 20 },
      { gene: "KRAS", freq: 18 },
      { gene: "CTCF", freq: 15 },
      { gene: "FGFR2", freq: 12 },
      { gene: "RPL22", freq: 10 }
    ],
    amplifications: [
      { gene: "CCNE1", freq: 10 },
      { gene: "MYC", freq: 8 },
      { gene: "ERBB2", freq: 5 },
      { gene: "PIK3CA", freq: 5 },
      { gene: "FGFR3", freq: 3 }
    ],
    deletions: [
      { gene: "PTEN", freq: 35 },
      { gene: "CDKN2A", freq: 8 },
      { gene: "TP53", freq: 6 },
      { gene: "ARID1A", freq: 5 },
      { gene: "RB1", freq: 4 }
    ],
    clinical: {
      male: 0,
      female: 100,
      medianAge: 64,
      tmb: 3.0,
      survival5yr: 81
    },
    histology: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Endometrioid_endometrial_adenocarcinoma_low_mag.jpg/220px-Endometrioid_endometrial_adenocarcinoma_low_mag.jpg"
  },
  
  "Pancreatic Ductal Adenocarcinoma": {
    mutations: [
      { gene: "KRAS", freq: 93 },
      { gene: "TP53", freq: 72 },
      { gene: "CDKN2A", freq: 30 },
      { gene: "SMAD4", freq: 25 },
      { gene: "ARID1A", freq: 8 },
      { gene: "RNF43", freq: 7 },
      { gene: "TGFBR2", freq: 5 },
      { gene: "GNAS", freq: 5 },
      { gene: "KMT2D", freq: 4 },
      { gene: "KMT2C", freq: 4 }
    ],
    amplifications: [
      { gene: "MYC", freq: 15 },
      { gene: "KRAS", freq: 12 },
      { gene: "GATA6", freq: 10 },
      { gene: "ERBB2", freq: 5 },
      { gene: "AKT2", freq: 5 }
    ],
    deletions: [
      { gene: "CDKN2A", freq: 50 },
      { gene: "SMAD4", freq: 35 },
      { gene: "TP53", freq: 15 },
      { gene: "ARID1A", freq: 5 },
      { gene: "PTEN", freq: 4 }
    ],
    clinical: {
      male: 56,
      female: 44,
      medianAge: 65,
      tmb: 1.5,
      survival5yr: 11
    },
    histology: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Pancreatic_adenocarcinoma_%282%29_Case_01.jpg/220px-Pancreatic_adenocarcinoma_%282%29_Case_01.jpg"
  },
  
  "Thyroid Papillary Carcinoma": {
    mutations: [
      { gene: "BRAF", freq: 60 },
      { gene: "NRAS", freq: 8 },
      { gene: "HRAS", freq: 4 },
      { gene: "EIF1AX", freq: 3 },
      { gene: "KRAS", freq: 2 },
      { gene: "TP53", freq: 1 },
      { gene: "PIK3CA", freq: 1 },
      { gene: "PTEN", freq: 1 },
      { gene: "AKT1", freq: 1 },
      { gene: "TSHR", freq: 1 }
    ],
    amplifications: [
      { gene: "TERT", freq: 5 },
      { gene: "MYC", freq: 2 },
      { gene: "EGFR", freq: 1 },
      { gene: "CCND1", freq: 1 },
      { gene: "MDM2", freq: 1 }
    ],
    deletions: [
      { gene: "CDKN2A", freq: 3 },
      { gene: "PTEN", freq: 2 },
      { gene: "TP53", freq: 1 },
      { gene: "RB1", freq: 1 },
      { gene: "NF1", freq: 1 }
    ],
    clinical: {
      male: 27,
      female: 73,
      medianAge: 47,
      tmb: 0.5,
      survival5yr: 98
    },
    histology: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Papillary_thyroid_carcinoma_histopathology_%282%29.jpg/220px-Papillary_thyroid_carcinoma_histopathology_%282%29.jpg"
  },
  
  "Cervical Squamous Cell Carcinoma": {
    mutations: [
      { gene: "PIK3CA", freq: 26 },
      { gene: "EP300", freq: 10 },
      { gene: "FBXW7", freq: 10 },
      { gene: "KRAS", freq: 8 },
      { gene: "PTEN", freq: 8 },
      { gene: "TP53", freq: 6 },
      { gene: "NFE2L2", freq: 5 },
      { gene: "HLA-A", freq: 5 },
      { gene: "HLA-B", freq: 5 },
      { gene: "ARID1A", freq: 4 }
    ],
    amplifications: [
      { gene: "PIK3CA", freq: 18 },
      { gene: "MYC", freq: 15 },
      { gene: "EGFR", freq: 8 },
      { gene: "ERBB2", freq: 5 },
      { gene: "CCND1", freq: 5 }
    ],
    deletions: [
      { gene: "CDKN2A", freq: 12 },
      { gene: "PTEN", freq: 10 },
      { gene: "TGFBR2", freq: 5 },
      { gene: "SMAD4", freq: 4 },
      { gene: "RB1", freq: 3 }
    ],
    clinical: {
      male: 0,
      female: 100,
      medianAge: 47,
      tmb: 3.5,
      survival5yr: 66
    },
    histology: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Cervical_cancer_cells_%281%29.jpg/220px-Cervical_cancer_cells_%281%29.jpg"
  },
  
  "Sarcoma": {
    mutations: [
      { gene: "TP53", freq: 35 },
      { gene: "ATRX", freq: 20 },
      { gene: "RB1", freq: 15 },
      { gene: "NF1", freq: 8 },
      { gene: "PIK3CA", freq: 5 },
      { gene: "PTEN", freq: 5 },
      { gene: "CDKN2A", freq: 4 },
      { gene: "KMT2D", freq: 4 },
      { gene: "ARID1A", freq: 3 },
      { gene: "CTNNB1", freq: 3 }
    ],
    amplifications: [
      { gene: "CDK4", freq: 25 },
      { gene: "MDM2", freq: 22 },
      { gene: "HMGA2", freq: 15 },
      { gene: "TERT", freq: 10 },
      { gene: "MYC", freq: 8 }
    ],
    deletions: [
      { gene: "CDKN2A", freq: 25 },
      { gene: "RB1", freq: 18 },
      { gene: "TP53", freq: 10 },
      { gene: "NF1", freq: 8 },
      { gene: "PTEN", freq: 6 }
    ],
    clinical: {
      male: 52,
      female: 48,
      medianAge: 61,
      tmb: 1.5,
      survival5yr: 55
    },
    histology: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Leiomyosarcoma_of_the_Adrenal_gland.jpg/220px-Leiomyosarcoma_of_the_Adrenal_gland.jpg"
  },
  
  "Low Grade Glioma": {
    mutations: [
      { gene: "IDH1", freq: 77 },
      { gene: "TP53", freq: 50 },
      { gene: "ATRX", freq: 42 },
      { gene: "CIC", freq: 20 },
      { gene: "FUBP1", freq: 10 },
      { gene: "IDH2", freq: 5 },
      { gene: "NOTCH1", freq: 5 },
      { gene: "PIK3CA", freq: 5 },
      { gene: "PIK3R1", freq: 4 },
      { gene: "NF1", freq: 3 }
    ],
    amplifications: [
      { gene: "CDK4", freq: 5 },
      { gene: "PDGFRA", freq: 4 },
      { gene: "MDM2", freq: 3 },
      { gene: "EGFR", freq: 2 },
      { gene: "MYC", freq: 2 }
    ],
    deletions: [
      { gene: "CDKN2A", freq: 25 },
      { gene: "CIC", freq: 10 },
      { gene: "FUBP1", freq: 8 },
      { gene: "PTEN", freq: 5 },
      { gene: "RB1", freq: 3 }
    ],
    clinical: {
      male: 55,
      female: 45,
      medianAge: 41,
      tmb: 1.0,
      survival5yr: 70
    },
    histology: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Astrocytoma_World_Health_Organization_Grade_II.jpg/220px-Astrocytoma_World_Health_Organization_Grade_II.jpg"
  },
  
  "Testicular Germ Cell Tumor": {
    mutations: [
      { gene: "KIT", freq: 18 },
      { gene: "KRAS", freq: 14 },
      { gene: "NRAS", freq: 4 },
      { gene: "TP53", freq: 3 },
      { gene: "BRAF", freq: 2 },
      { gene: "PIK3CA", freq: 2 },
      { gene: "AKT1", freq: 1 },
      { gene: "CTNNB1", freq: 1 },
      { gene: "STK11", freq: 1 },
      { gene: "PTEN", freq: 1 }
    ],
    amplifications: [
      { gene: "KRAS", freq: 60 },
      { gene: "KIT", freq: 20 },
      { gene: "CCND2", freq: 15 },
      { gene: "MDM2", freq: 10 },
      { gene: "MYC", freq: 8 }
    ],
    deletions: [
      { gene: "CDKN2A", freq: 5 },
      { gene: "PTEN", freq: 3 },
      { gene: "RB1", freq: 2 },
      { gene: "TP53", freq: 1 },
      { gene: "NF1", freq: 1 }
    ],
    clinical: {
      male: 100,
      female: 0,
      medianAge: 31,
      tmb: 0.5,
      survival5yr: 95
    },
    histology: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Seminoma_of_the_Testis.jpg/220px-Seminoma_of_the_Testis.jpg"
  },
  
  "Esophageal Carcinoma": {
    mutations: [
      { gene: "TP53", freq: 72 },
      { gene: "NFE2L2", freq: 10 },
      { gene: "KMT2D", freq: 10 },
      { gene: "NOTCH1", freq: 9 },
      { gene: "PIK3CA", freq: 8 },
      { gene: "CDKN2A", freq: 8 },
      { gene: "FAT1", freq: 7 },
      { gene: "RB1", freq: 6 },
      { gene: "EP300", freq: 6 },
      { gene: "ERBB2", freq: 5 }
    ],
    amplifications: [
      { gene: "CCND1", freq: 35 },
      { gene: "SOX2", freq: 20 },
      { gene: "EGFR", freq: 15 },
      { gene: "ERBB2", freq: 12 },
      { gene: "MYC", freq: 10 }
    ],
    deletions: [
      { gene: "CDKN2A", freq: 40 },
      { gene: "SMAD4", freq: 12 },
      { gene: "RB1", freq: 10 },
      { gene: "PTEN", freq: 8 },
      { gene: "NOTCH1", freq: 5 }
    ],
    clinical: {
      male: 82,
      female: 18,
      medianAge: 62,
      tmb: 5.5,
      survival5yr: 20
    },
    histology: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Esophageal_adenocarcinoma_%281%29_HE_stain.jpg/220px-Esophageal_adenocarcinoma_%281%29_HE_stain.jpg"
  },
  
  "Kidney Papillary Cell Carcinoma": {
    mutations: [
      { gene: "MET", freq: 17 },
      { gene: "KMT2D", freq: 10 },
      { gene: "SETD2", freq: 10 },
      { gene: "NF2", freq: 8 },
      { gene: "SMARCB1", freq: 6 },
      { gene: "FAT1", freq: 6 },
      { gene: "BAP1", freq: 5 },
      { gene: "PBRM1", freq: 5 },
      { gene: "TP53", freq: 4 },
      { gene: "CDKN2A", freq: 4 }
    ],
    amplifications: [
      { gene: "MET", freq: 15 },
      { gene: "MYC", freq: 8 },
      { gene: "EGFR", freq: 5 },
      { gene: "CCND1", freq: 4 },
      { gene: "MDM2", freq: 3 }
    ],
    deletions: [
      { gene: "CDKN2A", freq: 20 },
      { gene: "BAP1", freq: 8 },
      { gene: "NF2", freq: 6 },
      { gene: "SETD2", freq: 5 },
      { gene: "PTEN", freq: 4 }
    ],
    clinical: {
      male: 74,
      female: 26,
      medianAge: 62,
      tmb: 1.2,
      survival5yr: 82
    },
    histology: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Papillary_renal_cell_carcinoma_-_very_high_mag.jpg/220px-Papillary_renal_cell_carcinoma_-_very_high_mag.jpg"
  },
  
  "Cholangiocarcinoma": {
    mutations: [
      { gene: "TP53", freq: 35 },
      { gene: "KRAS", freq: 22 },
      { gene: "IDH1", freq: 18 },
      { gene: "ARID1A", freq: 15 },
      { gene: "BAP1", freq: 12 },
      { gene: "PBRM1", freq: 10 },
      { gene: "PIK3CA", freq: 6 },
      { gene: "SMAD4", freq: 6 },
      { gene: "IDH2", freq: 5 },
      { gene: "FGFR2", freq: 5 }
    ],
    amplifications: [
      { gene: "CCND1", freq: 10 },
      { gene: "ERBB2", freq: 8 },
      { gene: "MYC", freq: 6 },
      { gene: "MDM2", freq: 5 },
      { gene: "MET", freq: 4 }
    ],
    deletions: [
      { gene: "CDKN2A", freq: 25 },
      { gene: "BAP1", freq: 12 },
      { gene: "PTEN", freq: 8 },
      { gene: "SMAD4", freq: 6 },
      { gene: "ARID1A", freq: 5 }
    ],
    clinical: {
      male: 56,
      female: 44,
      medianAge: 65,
      tmb: 1.8,
      survival5yr: 10
    },
    histology: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Cholangiocarcinoma_-_high_mag.jpg/220px-Cholangiocarcinoma_-_high_mag.jpg"
  },
  
  "Adrenocortical Carcinoma": {
    mutations: [
      { gene: "TP53", freq: 25 },
      { gene: "CTNNB1", freq: 20 },
      { gene: "ZNRF3", freq: 15 },
      { gene: "PRKAR1A", freq: 8 },
      { gene: "MEN1", freq: 7 },
      { gene: "DAXX", freq: 6 },
      { gene: "ATRX", freq: 5 },
      { gene: "RB1", freq: 4 },
      { gene: "APC", freq: 3 },
      { gene: "MED12", freq: 3 }
    ],
    amplifications: [
      { gene: "TERT", freq: 15 },
      { gene: "CDK4", freq: 10 },
      { gene: "MDM2", freq: 8 },
      { gene: "IGF2", freq: 80 },
      { gene: "MYC", freq: 5 }
    ],
    deletions: [
      { gene: "CDKN2A", freq: 15 },
      { gene: "CDKN2C", freq: 12 },
      { gene: "RB1", freq: 10 },
      { gene: "TP53", freq: 8 },
      { gene: "ZNRF3", freq: 6 }
    ],
    clinical: {
      male: 41,
      female: 59,
      medianAge: 50,
      tmb: 2.5,
      survival5yr: 35
    },
    histology: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Adrenal_cortical_carcinoma_-_high_mag.jpg/220px-Adrenal_cortical_carcinoma_-_high_mag.jpg"
  },
  
  "Pheochromocytoma and Paraganglioma": {
    mutations: [
      { gene: "SDHB", freq: 17 },
      { gene: "SDHD", freq: 8 },
      { gene: "VHL", freq: 7 },
      { gene: "RET", freq: 6 },
      { gene: "NF1", freq: 6 },
      { gene: "HRAS", freq: 5 },
      { gene: "SDHC", freq: 3 },
      { gene: "SDHA", freq: 3 },
      { gene: "MAX", freq: 3 },
      { gene: "TMEM127", freq: 2 }
    ],
    amplifications: [
      { gene: "MDM2", freq: 5 },
      { gene: "MYC", freq: 3 },
      { gene: "TERT", freq: 3 },
      { gene: "CCND1", freq: 2 },
      { gene: "CDK4", freq: 2 }
    ],
    deletions: [
      { gene: "SDHB", freq: 18 },
      { gene: "VHL", freq: 8 },
      { gene: "CDKN2A", freq: 5 },
      { gene: "NF1", freq: 4 },
      { gene: "RB1", freq: 2 }
    ],
    clinical: {
      male: 48,
      female: 52,
      medianAge: 47,
      tmb: 0.5,
      survival5yr: 85
    },
    histology: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Pheochromocytoma_high_mag.jpg/220px-Pheochromocytoma_high_mag.jpg"
  }
};

const CANCER_TYPES = Object.keys(CANCER_DATA);
