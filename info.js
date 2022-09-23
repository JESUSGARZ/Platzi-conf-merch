
//firebase.json
{
  "hosting": {
    "public": "dist",
    "ignore": [
      "firebase.json",
      "**/.*",
      "**/node_modules/**"
    ],
    "rewrites": [
      {
        "source":"**",
        "destination":"/index.html"
      }
    ]
  }
}

//.firebaserc

{
  "projects": {
    "default": "platzi-store-merch-5ddfa"
  }
}