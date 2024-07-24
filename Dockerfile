# Temel image olarak node'u kullan
FROM node:18

# Uygulama dizinini oluştur
WORKDIR /app

# package.json ve package-lock.json dosyalarını kopyala
COPY package*.json ./

# Gerekli bağımlılıkları yükle
RUN npm install

# Uygulamanın tüm kaynak kodunu kopyala
COPY . .

# Uygulamayı derle
RUN npm run build

# Uygulamanın çalışacağı port
EXPOSE 3000

# Uygulamayı çalıştır
CMD ["npm", "start"]