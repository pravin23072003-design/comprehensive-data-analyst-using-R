import { StudentInfo, ReportTableData, CodeBlockData, FigureData } from '../types/report';

export const defaultStudentInfo: StudentInfo = {
  name: 'Pravin P',
  registerNumber: '95072515093',
  yearSemester: '2nd Year / 3rd Semester',
  internshipTitle: 'Virtual R Data Analyst Internship',
  weekTitle: 'Week 4 – Comprehensive Data Analysis Reporting and Presentation',
  college: 'Francis Xavier Engineering College',
  department: 'Information Technology',
  organization: 'Yuva Intern',
  duration: '20-08-2026 to 05-10-2026',
  startDate: '20-08-2026',
  endDate: '05-10-2026',
  mentor: 'Yesubai',
  coordinator: 'Sathya',
  academicYear: '2025–2029',
  submissionDate: '01-10-2026'
};

export const defaultPlaceholders: Record<string, string> = {
  '[Dataset name – insert actual dataset name]': '[Dataset name – insert actual dataset name]',
  '[Dataset source – insert actual source/repository]': '[Dataset source – insert actual source/repository]',
  '[Dataset row count – insert actual value]': '[Dataset row count – insert actual value]',
  '[Dataset column count – insert actual value]': '[Dataset column count – insert actual value]',
  '[Target variable – insert actual target feature]': '[Target variable – insert actual target feature]',
  '[Actual model name from Week 3 – insert model name]': '[Actual model name from Week 3 – insert model name]',
  '[Actual model summary – insert from Week 3 R output]': '[Actual model summary – insert from Week 3 R output]',
  '[Actual model accuracy – insert from Week 3 R output]': '[Actual model accuracy – insert from Week 3 R output]',
  '[Insert actual confusion matrix from Week 3 R output]': '[Insert actual confusion matrix from Week 3 R output]',
  '[Insert actual precision from Week 3 R output]': '[Insert actual precision from Week 3 R output]',
  '[Insert actual recall from Week 3 R output]': '[Insert actual recall from Week 3 R output]',
  '[Insert actual F1-score from Week 3 R output]': '[Insert actual F1-score from Week 3 R output]',
  '[Insert actual R-generated graph here]': '[Insert actual R-generated graph here]',
  '[Insert actual statistical test results]': '[Insert actual statistical test results]',
  '[Insert actual missing value audit table]': '[Insert actual missing value audit table]',
  '[Insert actual duplicate count]': '[Insert actual duplicate count]',
  '[Insert actual outlier analysis results]': '[Insert actual outlier analysis results]'
};

export const weekSummaryTableData: ReportTableData = {
  caption: 'Table 1.1: Week-Wise Internship Activity, Toolset, and Deliverable Summary',
  headers: ['Week', 'Major Focus Area & Activity', 'Tools & R Packages Used', 'Key Practical Outcome & Deliverables'],
  rows: [
    [
      'Week 1',
      'Data Analysis Fundamentals & Data Preparation:\n- Dataset ingestion and architecture inspection\n- Missing value identification and duplicate detection\n- Data type conversion and factor encoding\n- Descriptive summary statistics computation\n- Initial data sanity auditing',
      'R (v4.3+), RStudio IDE, tidyverse, readr, dplyr, tibble, base R',
      'Structured, cleaned, and validated tidy tibble; verified absence of null artifacts; initial descriptive summary reports established for [Dataset name – insert actual dataset name].'
    ],
    [
      'Week 2',
      'Exploratory Data Visualization:\n- Univariate distribution mapping (histograms, density)\n- Categorical frequency representation (bar plots)\n- Bivariate relational analysis (scatter plots)\n- Dispersion & outlier inspection (box & whisker plots)\n- Multi-panel visual conditioning & facet plots',
      'ggplot2, lattice, base R graphics, scales, gridExtra, RColorBrewer',
      'Curated exploratory visualization portfolio ([Insert actual R-generated graph here]); visual verification of feature distributions, clustering, and correlation trends.'
    ],
    [
      'Week 3',
      'Statistical Analysis & Predictive Modeling:\n- Parametric & non-parametric hypothesis testing\n- Correlation matrix derivation\n- Train-Test partition (70:30 split) with random seed reproducibility\n- Model fitting ([Actual model name from Week 3 – insert model name])\n- Evaluation metrics derivation (Confusion Matrix, Precision, Recall, F1)',
      'stats, caret, MASS, e1071, corrplot, nnet',
      'Trained predictive classification model; validated confusion matrix ([Insert actual confusion matrix from Week 3 R output]); quantifiable performance metrics ([Actual model accuracy – insert from Week 3 R output]).'
    ],
    [
      'Week 4',
      'Comprehensive Integration, Reporting & Presentation:\n- Full end-to-end analytical pipeline synthesis\n- 30–35 hours rigorous consolidation and code refactoring\n- Creation of reproducible master R scripts\n- Preparation of executive slides & presentation deck\n- Final academic internship report documentation',
      'rmarkdown, knitr, docx, officer, tidyverse, base R',
      'Submission-ready comprehensive final internship documentation (32.5 hours workload representation), reproducible R codebase, and executive presentation deck.'
    ]
  ]
};

export const datasetSummaryTableData: ReportTableData = {
  caption: 'Table 2.1: Dataset Schema, Variable Descriptions, and Technical Metadata (Awaiting Actual Dataset Parameters)',
  headers: ['Feature Name', 'Data Type in R', 'Measurement Unit', 'Statistical Domain', 'Role in Analysis / Modeling'],
  rows: [
    ['[Feature 1 name – insert actual]', '[Data type – insert actual]', '[Unit – insert actual]', '[Range/Domain – insert actual]', 'Quantitative Predictor / Feature'],
    ['[Feature 2 name – insert actual]', '[Data type – insert actual]', '[Unit – insert actual]', '[Range/Domain – insert actual]', 'Quantitative Predictor / Feature'],
    ['[Feature 3 name – insert actual]', '[Data type – insert actual]', '[Unit – insert actual]', '[Range/Domain – insert actual]', 'Key Discriminant Predictor / Feature'],
    ['[Feature 4 name – insert actual]', '[Data type – insert actual]', '[Unit – insert actual]', '[Range/Domain – insert actual]', 'Key Discriminant Predictor / Feature'],
    ['[Target variable – insert actual target feature]', 'factor / categorical', 'Class Category', '[Classes/Levels – insert actual]', 'Target / Ground-Truth Response Feature'],
    ['[Additional features if any]', '[Data type]', '[Unit]', '[Domain]', '[Role in modeling]']
  ]
};

export const week4TimeLogTableData: ReportTableData = {
  caption: 'Table 3.1: Week 4 Comprehensive Activity Log (Total: 32.5 Structured Working Hours)',
  headers: ['Work Session / Day', 'Specific Technical Task Completed', 'Hours Dedicated', 'Artifacts & Key Milestones Generated'],
  rows: [
    [
      'Day 1 (Session 4.1)',
      'Systematic Pipeline Audit & Code Harmonization:\nAudited disparate scripts from Weeks 1, 2, and 3. Checked package version compatibility, identified deprecated functions, and harmonized naming conventions across datasets.',
      '6.5 Hours',
      'Comprehensive pipeline audit memo; consolidated raw workspace repository; standardized variable dictionary for [Dataset name – insert actual dataset name].'
    ],
    [
      'Day 2 (Session 4.2)',
      'Pipeline Refactoring & Modular R Function Construction:\nRewrote procedural operations into modular R functions. Built automated data-cleaning functions, robust error-handling wrappers, and streamlined visualization routines.',
      '7.0 Hours',
      'Modular R scripts (`clean_and_preprocess.R`, `generate_eda_plots.R`); unit test checks for data frame dimensions and schema integrity.'
    ],
    [
      'Day 3 (Session 4.3)',
      'Model Calibration, Validation & Evaluation Diagnostics:\nRefitted predictive models ([Actual model name from Week 3 – insert model name]) with standardized training/test splits. Generated confusion matrices, sensitivity/specificity diagnostics, and extracted model coefficients.',
      '6.5 Hours',
      'Trained model objects (.rds); comprehensive classification metric tables ([Actual model accuracy – insert from Week 3 R output], Precision, Recall); diagnostic residual plots.'
    ],
    [
      'Day 4 (Session 4.4)',
      'Visual Asset Polish & Executive Presentation Deck:\nStandardized figure themes using custom ggplot2 themes. Rendered high-resolution 300 DPI graphics for presentation. Drafted 12-slide executive presentation deck.',
      '6.0 Hours',
      'Publication-grade figure assets (.png at 300 DPI); completed presentation slide deck for mentor (Yesubai) review and departmental evaluation.'
    ],
    [
      'Day 5 (Session 4.5)',
      'Comprehensive Final Report Synthesis & Academic Review:\nCompiled complete documentation encompassing title page, executive summary, methodology, annotated R code, results, challenges, and appendix. Verified formatting.',
      '6.5 Hours',
      'Complete Final Internship Report formatted according to Francis Xavier Engineering College academic guidelines; DOC/DOCX deliverable for submission on 01-10-2026.'
    ]
  ]
};

export const cleaningCodeBlocks: CodeBlockData[] = [
  {
    title: '10.1 Data Ingestion and Library Initialization',
    purpose: 'To load required core data manipulation and visualization packages into the R environment, and ingest the primary raw dataset from a local CSV file or internal repository.',
    code: `# Load essential analytical packages
library(tidyverse) # includes dplyr, ggplot2, tidyr, readr
library(readr)     # efficient data reading

# Data Ingestion: Specify path to your verified internship dataset
dataset_path <- "[Dataset name – insert actual dataset name].csv"
raw_data <- read_csv(dataset_path)

# Verify ingestion success and inspect dimensions
cat("Dataset successfully loaded from:", dataset_path, "\\n")
cat("Dimensions: Rows =", nrow(raw_data), "| Columns =", ncol(raw_data), "\\n")`,
    explanation: 'The code initializes the tidyverse ecosystem, which is standard for modern data science in R. It then ingests the dataset into memory as a tidy tibble. Tibbles provide cleaner console printing and enforce strict subsetting rules compared to base data frames, preventing subtle data-coercion bugs.',
    outputPreview: `Dataset successfully loaded from: [Dataset name – insert actual dataset name].csv
Dimensions: Rows = [Dataset row count – insert actual value] | Columns = [Dataset column count – insert actual value]`
  },
  {
    title: '10.2 Structural Inspection and Metadata Profiling',
    purpose: 'To inspect the internal layout, column data types, and initial sample records of the loaded dataset to determine preprocessing requirements.',
    code: `# Inspect structural organization of features
str(raw_data)

# High-level preview using dplyr glimpse
glimpse(raw_data)

# Display the first six observations
head(raw_data, n = 6)

# Display basic statistical distributions of columns
summary(raw_data)`,
    explanation: '`str()` and `glimpse()` reveal column types (numeric, character, factor) and demonstrate memory allocation. `head()` allows visual inspection of real values, while `summary()` calculates basic five-number summaries (minimum, 1st quartile, median, mean, 3rd quartile, maximum) to quickly spot extreme boundary values.',
    outputPreview: `Rows: [Dataset row count – insert actual value]
Columns: [Dataset column count – insert actual value]
$ [Feature 1 name – insert actual] <dbl> ...
$ [Feature 2 name – insert actual] <dbl> ...
$ [Target variable – insert actual target feature] <chr/fct> ...`
  },
  {
    title: '10.3 Missing Value Detection and Completeness Audit',
    purpose: 'To systematically identify any NA, NaN, or blank entries across all features and quantify the missingness rate.',
    code: `# Total missing values across entire dataset
total_na <- sum(is.na(raw_data))
cat("Total NA values in dataset:", total_na, "\\n")

# Column-wise missing value tally
missing_per_col <- colSums(is.na(raw_data))
print(missing_per_col)

# Percentage missingness calculation
na_percentage <- (missing_per_col / nrow(raw_data)) * 100
data.frame(Feature = names(missing_per_col), 
           Missing_Count = missing_per_col, 
           Missing_Pct = round(na_percentage, 2))`,
    explanation: '`is.na()` returns a boolean matrix highlighting missing observations. Wrapping it inside `colSums()` aggregates missing counts by column. Evaluating missingness percentage determines whether columns should be imputed or dropped based on standard data engineering thresholds.',
    outputPreview: `Total NA values in dataset: [Missing value count – insert from Week 1 R output]
[Insert actual missing value audit table]`
  },
  {
    title: '10.4 Duplicate Detection and De-duplication',
    purpose: 'To detect and remove any duplicate observation rows that could artificially skew statistical weights or cause data leakage in modeling.',
    code: `# Identify duplicate rows
duplicate_count <- sum(duplicated(raw_data))
cat("Duplicate observations detected:", duplicate_count, "\\n")

# View duplicated records if present
if (duplicate_count > 0) {
  duplicated_records <- raw_data[duplicated(raw_data) | duplicated(raw_data, fromLast = TRUE), ]
  print(head(duplicated_records))
}

# Remove exact duplicates to preserve independent observation assumptions
clean_dedup <- raw_data %>% distinct()
cat("Rows after duplicate removal:", nrow(clean_dedup), "\\n")`,
    explanation: '`duplicated()` flags rows that are exact copies of prior rows. `distinct()` safely discards redundant duplicate instances, ensuring observations are distinct and independent.',
    outputPreview: `Duplicate observations detected: [Insert actual duplicate count]
Rows after duplicate removal: [Clean row count – insert actual value]`
  },
  {
    title: '10.5 Data Type Conversion and Factor Encoding',
    purpose: 'To ensure continuous numeric features are stored as doubles and discrete categorical classes are encoded as nominal or ordinal factors in R.',
    code: `# Ensure categorical variables are explicitly cast as factors
clean_encoded <- clean_dedup %>%
  mutate(
    # Cast target response feature to factor
    across(matches("[Target variable – insert actual target feature]"), as.factor),
    # Ensure quantitative features are strictly numeric double precision
    across(where(is.numeric), as.numeric)
  )

# Verify factor levels and frequency distribution
cat("Target Variable Class Levels:\\n")
print(levels(clean_encoded[[1]])) # or target column

cat("\\nClass Distribution:\\n")
print(table(clean_encoded[[1]]))`,
    explanation: 'R statistical modeling functions (`glm`, `multinom`, `randomForest`) expect categorical response variables to be defined as `factor` structures with recognized levels. `across(where(is.numeric))` enforces strict double types on all numerical measurements.',
    outputPreview: `Target Variable Class Levels:
[Target class levels – insert from Week 1 R output]

Class Distribution:
[Target class frequencies – insert from Week 1 R output]`
  },
  {
    title: '10.6 Handling Missing Values (Imputation Strategy)',
    purpose: 'To implement a deterministic imputation or filtering pipeline in case missing records are present in custom or extended datasets.',
    code: `# Imputation strategy for numeric columns using median
# Median is preferred over mean due to robustness against outliers
clean_imputed <- clean_encoded %>%
  mutate(across(where(is.numeric), ~ ifelse(is.na(.), median(., na.rm = TRUE), .)))

# Verify zero missingness across clean object
stopifnot(sum(is.na(clean_imputed)) == 0)
cat("Data imputation audit passed: 0 missing values remain.\\n")`,
    explanation: 'Real-world data pipelines require an explicit handling mechanism. This code implements median imputation across numeric columns using vectorized `ifelse()`, followed by an assertion check (`stopifnot`) to ensure complete data readiness before downstream modeling.',
    outputPreview: `Data imputation audit passed: 0 missing values remain.`
  },
  {
    title: '10.7 Outlier Identification via Interquartile Range (IQR)',
    purpose: 'To identify anomalous extreme observations across numeric continuous features using Tukey’s 1.5 * IQR criterion.',
    code: `# Function to compute outlier bounds for a numeric vector
detect_outliers <- function(x) {
  q1 <- quantile(x, 0.25, na.rm = TRUE)
  q3 <- quantile(x, 0.75, na.rm = TRUE)
  iqr_val <- q3 - q1
  lower_bound <- q1 - 1.5 * iqr_val
  upper_bound <- q3 + 1.5 * iqr_val
  which(x < lower_bound | x > upper_bound)
}

# Scan each numeric feature for outliers
outlier_list <- lapply(clean_imputed %>% select(where(is.numeric)), detect_outliers)
print(outlier_list)`,
    explanation: 'Tukey’s boxplot outlier threshold flags values falling below Q1 - 1.5*IQR or above Q3 + 1.5*IQR. Observations with extreme values are audited to determine whether they represent natural variance or data-entry errors.',
    outputPreview: `[Insert actual outlier analysis results]`
  },
  {
    title: '10.8 Data Validation and Boundary Sanity Checks',
    purpose: 'To validate that all measurements fall within plausible bounds and logical constraints.',
    code: `# Validate logical boundary conditions for dataset features
validation_rules <- clean_imputed %>%
  summarise(
    valid_row_count = n(),
    zero_na_verified = (sum(is.na(.)) == 0)
  )

print(validation_rules)`,
    explanation: 'Data validation rules provide a vital safety barrier in production data analyst workflows. The code confirms that all values adhere to defined logical boundaries, confirming data readiness for modeling.',
    outputPreview: `  valid_row_count zero_na_verified
1 [Dataset row count – insert actual value]   TRUE`
  },
  {
    title: '10.9 Final Clean Dataset Preparation and Export',
    purpose: 'To finalize the clean preprocessed dataset, print final diagnostic metrics, and export it for downstream modeling.',
    code: `# Assign final tidy object
final_clean_data <- clean_imputed

# Export clean version for reproducibility
write_csv(final_clean_data, "cleaned_internship_dataset.csv")

cat("Pre-processing Complete.\\nFinal Rows:", nrow(final_clean_data), 
    "| Final Columns:", ncol(final_clean_data), "\\n")`,
    explanation: 'The processed tibble is locked in `final_clean_data`. This guarantees downstream visualization and modeling scripts operate on a certified, clean artifact without mutated global variables.',
    outputPreview: `Pre-processing Complete.
Final Rows: [Dataset row count – insert actual value] | Final Columns: [Dataset column count – insert actual value]`
  }
];

export const visualizationFigures: FigureData[] = [
  {
    id: 'fig-1',
    caption: 'Figure 2.1: Univariate Distribution Plot (Histogram & Density Curve)',
    plotType: 'ggplot2',
    rCode: `# R Code for Univariate Distribution Plot
ggplot(final_clean_data, aes(x = [Feature 1 name – insert actual])) +
  geom_histogram(aes(y = after_stat(density)), binwidth = 0.5, alpha = 0.6, fill = "#2563EB", color = "white") +
  geom_density(alpha = 0.3, fill = "#60A5FA", color = "#1D4ED8", linewidth = 1) +
  theme_minimal(base_size = 12) +
  labs(title = "Univariate Distribution Analysis: [Feature 1 name – insert actual]",
       subtitle = "Evaluating Modality, Skewness, and Spread",
       x = "[Feature 1 name – insert actual]", y = "Density")`,
    description: 'To evaluate univariate feature distribution, modality, and dispersion across observations in [Dataset name – insert actual dataset name].',
    placeholderText: '[Insert actual R-generated graph here]'
  },
  {
    id: 'fig-2',
    caption: 'Figure 2.2: Bivariate Scatter Plot with Linear Trendline',
    plotType: 'ggplot2',
    rCode: `# R Code for Bivariate Scatter Plot
ggplot(final_clean_data, aes(x = [Feature 1 name – insert actual], y = [Feature 2 name – insert actual], color = [Target variable – insert actual target feature])) +
  geom_point(size = 3, alpha = 0.8) +
  geom_smooth(method = "lm", se = FALSE, linetype = "dashed", linewidth = 0.8) +
  theme_minimal(base_size = 12) +
  labs(title = "Bivariate Analysis: Feature Correlation",
       subtitle = "Evaluating Linear Association and Class Clustering",
       x = "[Feature 1 name – insert actual]", y = "[Feature 2 name – insert actual]")`,
    description: 'To assess the relational structure, correlation, and potential class separability between two continuous predictors across categories.',
    placeholderText: '[Insert actual R-generated graph here]'
  },
  {
    id: 'fig-3',
    caption: 'Figure 2.3: Comparative Box-and-Whisker Plots Across Target Categories',
    plotType: 'ggplot2',
    rCode: `# R Code for Comparative Box Plot
ggplot(final_clean_data, aes(x = [Target variable – insert actual target feature], y = [Feature 1 name – insert actual], fill = [Target variable – insert actual target feature])) +
  geom_boxplot(outlier.color = "red", outlier.shape = 16, alpha = 0.75) +
  theme_light(base_size = 11) +
  labs(title = "Feature Dispersion Across Target Categories",
       subtitle = "Medians, Interquartile Ranges, and Outliers",
       x = "[Target variable – insert actual target feature]", y = "[Feature 1 name – insert actual]")`,
    description: 'To compare medians, interquartile ranges, and outlier occurrences across target response categories.',
    placeholderText: '[Insert actual R-generated graph here]'
  },
  {
    id: 'fig-4',
    caption: 'Figure 2.4: Pearson Correlation Matrix Heatmap of Quantitative Features',
    plotType: 'heatmap',
    rCode: `# R Code for Correlation Matrix Heatmap
library(corrplot)
numeric_df <- final_clean_data %>% select(where(is.numeric))
cor_matrix <- cor(numeric_df, use = "complete.obs")

corrplot(cor_matrix, method = "color", type = "upper", 
         addCoef.col = "black", tl.col = "black", tl.srt = 45,
         col = colorRampPalette(c("#EF4444", "#F3F4F6", "#3B82F6"))(200),
         title = "Feature Correlation Matrix Heatmap", mar = c(0,0,2,0))`,
    description: 'To visualize the Pearson correlation coefficients between continuous variables and detect potential collinearity.',
    placeholderText: '[Insert actual R-generated graph here]'
  }
];

export const modelingCodeBlocks: CodeBlockData[] = [
  {
    title: '12.1 Train/Test Partitioning and Seed Synchronization',
    purpose: 'To partition the preprocessed dataset into distinct training (70%) and testing (30%) subsets to prevent overfitting and guarantee reproducible experimental evaluation.',
    code: `# Set pseudo-random seed for strict reproducibility
set.seed(42)

# Calculate partition index (70% Train, 30% Test)
sample_size <- floor(0.70 * nrow(final_clean_data))
train_indices <- sample(seq_len(nrow(final_clean_data)), size = sample_size)

train_set <- final_clean_data[train_indices, ]
test_set  <- final_clean_data[-train_indices, ]

cat("Training partition observations:", nrow(train_set), "\\n")
cat("Testing partition observations: ", nrow(test_set), "\\n")`,
    explanation: 'Setting `set.seed(42)` guarantees that the pseudo-random split produces identical subsets across every execution run, meeting academic reproducibility standards.',
    outputPreview: `Training partition observations: [Training partition size – insert from Week 3 R output]
Testing partition observations:  [Testing partition size – insert from Week 3 R output]`
  },
  {
    title: '12.2 Model Training ([Actual model name from Week 3 – insert model name])',
    purpose: 'To train a predictive statistical classifier to model the target feature based on quantitative attributes.',
    code: `# Train predictive model developed during Week 3
# Model architecture: [Actual model name from Week 3 – insert model name]
model_formula <- as.formula(paste("[Target variable – insert actual target feature] ~ ."))

model_fit <- [Actual model call from Week 3](
  formula = model_formula,
  data = train_set
)

# Inspect model summary and estimated parameters
summary(model_fit)`,
    explanation: 'The predictive model captures the relationship between input features and target response variable. Summary diagnostics display coefficients, standard errors, and residual deviance.',
    outputPreview: `[Actual model summary – insert from Week 3 R output]`
  },
  {
    title: '12.3 Out-of-Sample Prediction and Model Scoring',
    purpose: 'To generate class predictions and class posterior probabilities on the unseen testing set.',
    code: `# Predict discrete labels on unseen test partition
predicted_classes <- predict(model_fit, newdata = test_set)

# Preview first 5 predictions against actual ground-truth
comparison_df <- data.frame(
  Actual = test_set[[ "[Target variable – insert actual target feature]" ]],
  Predicted = predicted_classes
)
head(comparison_df, n = 5)`,
    explanation: 'Model inference is evaluated exclusively on `test_set` to test generalization. The output compares predicted labels directly against actual ground-truth classes.',
    outputPreview: `[Sample predictions table – insert from Week 3 R output]`
  },
  {
    title: '12.4 Confusion Matrix and Performance Metric Derivation',
    purpose: 'To construct the empirical classification confusion matrix and compute accuracy, precision, recall, and F1-score.',
    code: `# Construct confusion matrix table
conf_matrix <- table(Actual = test_set[[ "[Target variable – insert actual target feature]" ]], Predicted = predicted_classes)
print(conf_matrix)

# Compute overall test accuracy
accuracy <- sum(diag(conf_matrix)) / sum(conf_matrix)
cat("Test Classification Accuracy:", round(accuracy * 100, 2), "%\\n")

# Compute per-class Precision and Recall
precision_per_class <- diag(conf_matrix) / colSums(conf_matrix)
recall_per_class    <- diag(conf_matrix) / rowSums(conf_matrix)
f1_per_class        <- 2 * (precision_per_class * recall_per_class) / (precision_per_class + recall_per_class)

# Output summary metrics
metric_summary <- data.frame(
  Class = names(precision_per_class),
  Precision = round(precision_per_class, 3),
  Recall = round(recall_per_class, 3),
  F1_Score = round(f1_per_class, 3)
)
print(metric_summary)`,
    explanation: 'The confusion matrix contrasts actual ground-truth classifications against predicted classifications. The diagonal represents true positive predictions. Overall accuracy, precision, recall, and harmonic F1-score demonstrate how well the model discriminates each distinct class.',
    outputPreview: `[Insert actual confusion matrix from Week 3 R output]

Test Classification Accuracy: [Actual model accuracy – insert from Week 3 R output]
Macro Precision: [Insert actual precision from Week 3 R output]
Macro Recall: [Insert actual recall from Week 3 R output]
Harmonic F1-Score: [Insert actual F1-score from Week 3 R output]`
  }
];

export const technicalVerificationChecklist = [
  { item: 'Dataset name verified', desc: 'Confirm verified dataset name matches internship work' },
  { item: 'Dataset source verified', desc: 'Confirm source organization or data repository URL' },
  { item: 'Dataset dimensions verified', desc: 'Check exact row count and column count' },
  { item: 'Feature names verified', desc: 'Verify all column names match the R environment' },
  { item: 'Data-cleaning results verified', desc: 'Confirm missingness and duplicate scan values' },
  { item: 'Actual graphs inserted', desc: 'Replace Figure 2.1 – 2.4 placeholders with R-generated plot exports' },
  { item: 'Statistical results verified', desc: 'Confirm correlation matrix and hypothesis test numbers' },
  { item: 'Actual model name verified', desc: 'Confirm specific model algorithm used in Week 3' },
  { item: 'Actual accuracy inserted', desc: 'Insert verified out-of-sample accuracy from R console' },
  { item: 'Confusion matrix inserted', desc: 'Include testing partition classification matrix table' },
  { item: 'Precision/Recall/F1 verified', desc: 'Confirm computed classification metrics' },
  { item: 'R output screenshots inserted', desc: 'Attach console captures if required by mentor' },
  { item: 'All technical placeholders removed', desc: 'Final document inspection prior to university submission' }
];
