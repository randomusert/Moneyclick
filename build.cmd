@echo off
echo installing tailwind css
npm install -D tailwindcss
pause
echo starting build
npx tailwindcss -i ./src/main.css -o ./src/output.css --watch