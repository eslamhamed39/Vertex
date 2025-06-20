// generate-meta.js

// استيراد الوحدات اللازمة من Node.js
const fs = require('fs'); // للتعامل مع الملفات
const path = require('path'); // للتعامل مع المسارات

// --- الإعدادات ---
// عنوان API الذي يجلب جميع المقالات
const API_URL = 'https://geomakani.com/CMS/api/content/items/Blogs';
// اسم المجلد الذي سيتم حفظ ملفات الميتا فيه. سيتم إنشاؤه داخل مجلد 'src'
const META_DIR_NAME = 'meta';
// المسار الكامل للمجلد. نضعه داخل 'src' حتى يمكن رفعه مع build الإنتاج
const META_DIR_PATH = path.join(__dirname, 'src', META_DIR_NAME);

// --- قالب HTML ---
// هذا هو القالب الذي سيتم ملؤه ببيانات كل مقال.
// لاحظ استخدام ${variableName} لوضع البيانات الديناميكية.
const createHtmlTemplate = (post) => {
    // استخلاص البيانات مع وضع قيم افتراضية للحماية من الأخطاء
    const title = post.title || 'Untitled Post';
    // تنظيف الوصف من 태그 HTML وأخذ أول 160 حرفًا
    const description = (post.Description || '').replace(/<[^>]*>?/gm, '').substring(0, 160).trim() + '...';
    const imageUrl = post.header_image ? `https://geomakani.com/CMS/storage/uploads${post.header_image.path}` : 'https://www.geomakani.com/assets/default-image.png'; // رابط صورة افتراضية
    const postId = post._id;

    return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  
  <title>${title}</title>
  <meta name="description" content="${description}">

  <meta property="og:type" content="article">
  <meta property="og:title" content="${title}">
  <meta property="og:description" content="${description}">
  <meta property="og:image" content="${imageUrl}">
  <meta property="og:site_name" content="Geomakani">

  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${title}">
  <meta name="twitter:description" content="${description}">
  <meta name="twitter:image" content="${imageUrl}">

  <style>
    /* CSS for the page and the spinner */
    body {
      margin: 0;
      padding: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      background-color: #121212; /* لون خلفية داكن مشابه لموقعك */
      font-family: sans-serif;
    }
    .loader {
      width: 50px;
      height: 50px;
      border: 5px solid #444; /* لون الدائرة الأساسي */
      border-top: 5px solid #3498db; /* لون الجزء المتحرك من الدائرة */
      border-radius: 50%;
      animation: spin 1s linear infinite;
    }
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
    .loading-text {
        color: #aaa;
        margin-left: 20px;
        font-size: 1.2em;
    }
  </style>

  <script>
    window.location.replace("https://www.geomakani.com/Blog/${postId}");
  </script>
</head>
<body>
  <div class="loader"></div>
  <div class="loading-text">Loading Article...</div>
</body>
</html>`;
};

// --- الدالة الرئيسية للسكربت ---
async function generateMetaFiles() {
    try {
        console.log('🚀 Starting meta file generation...');

        // 1. جلب بيانات المقالات من الـ API
        console.log(`Fetching posts from ${API_URL}...`);
        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error(`API request failed with status ${response.status}`);
        }
        const data = await response.json();
        const posts = data || [];
        console.log(`✅ Found ${posts.length} posts.`);

        // 2. التأكد من وجود مجلد 'meta'
        if (!fs.existsSync(META_DIR_PATH)) {
            console.log(`Creating directory: ${META_DIR_PATH}`);
            fs.mkdirSync(META_DIR_PATH, { recursive: true });
        }

        // 3. إنشاء ملف لكل مقال
        let filesGenerated = 0;
        for (const post of posts) {
            if (!post._id) continue; // تخطي المقالات التي لا تحتوي على ID

            const htmlContent = createHtmlTemplate(post);
            const filePath = path.join(META_DIR_PATH, `${post._id}.html`);

            fs.writeFileSync(filePath, htmlContent, 'utf8');
            filesGenerated++;
        }

        console.log(`\n🎉 Success! Generated ${filesGenerated} meta files in '${META_DIR_PATH}'`);

    } catch (error) {
        console.error('\n❌ An error occurred during meta file generation:');
        console.error(error);
        process.exit(1); // إنهاء السكربت مع رمز خطأ
    }
}

// --- تشغيل السكربت ---
generateMetaFiles();