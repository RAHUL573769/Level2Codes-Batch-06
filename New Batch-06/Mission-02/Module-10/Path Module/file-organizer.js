const fs = require("fs");
const path = require("path");

const sourceDirectory = path.join(__dirname, "output", "messy-files");
const organizedDirectory = path.join(__dirname, "output", "organized-files");

const categories = {
  images: [".jpg", ".jpeg", ".png", ".gif", ".bmp", ".svg"],
  documents: [".pdf", ".doc", ".docx", ".txt", ".rtf"],
  videos: [".mp4", ".avi", ".mkv", ".mov", ".wmv"],
  audio: [".mp3", ".wav", ".flac", ".aac", ".ogg"],
  code: [".js", ".py", ".java", ".cpp", ".html", ".css"],
  archives: [".zip", ".rar", ".tar", ".gz", ".7z"],
  spreadsheets: [".xls", ".xlsx", ".csv"],
  others: [],
};

const testFiles = [
  "vacation.jpg",
  "report.pdf",
  "presentation.pptx",
  "music.mp3",
  "video.mp4",
  "script.js",
  "data.csv",
  "archive.zip",
  "photo.png",
  "notes.txt",
  "app.py",
  "movie.avi",
  "song.wav",
  "backup.tar.gz",
  "random.xyz",
  "nodejs.zip",
];

function initializeDirectories() {
  // Create messy-files directory + files
  if (!fs.existsSync(sourceDirectory)) {
    fs.mkdirSync(sourceDirectory, { recursive: true });
    testFiles.forEach((file) => {
      fs.writeFileSync(path.join(sourceDirectory, file), `Content of ${file}`);
    });
  }
  console.log("Messy Files Created");

  // Create organized-files directory
  if (!fs.existsSync(organizedDirectory)) {
    fs.mkdirSync(organizedDirectory, { recursive: true });

    // Create category subfolders
    Object.keys(categories).forEach((category) => {
      const categoryPath = path.join(organizedDirectory, category);
      if (!fs.existsSync(categoryPath)) {
        fs.mkdirSync(categoryPath);
      }
    });
  }
}

initializeDirectories();

function getCategory(fileName) {
  const ext = path.extname(fileName).toLowerCase();

  for (const [category, extensions] of Object.entries(categories)) {
    if (extensions.includes(ext)) {
      return category;
    }
  }

  return "others"; // Default
}

// Test
console.log(getCategory("vacation.jpg")); // images
console.log(getCategory("data.csv")); // spreadsheets
console.log(getCategory("random.xyz")); // others
console.log(getCategory("archive.zip")); // archives

function organizedFiles() {
  console.log("File organizer");
}
