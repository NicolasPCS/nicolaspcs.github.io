#!/bin/bash
echo "🛠️ Generando sitio..."
# First time:
rm -rf .jekyll-cache _site

# Anterior
#docker compose run --rm -T jekyll bundle exec jekyll build || { echo "❌ Error al generar el sitio"; exit 1; }
docker compose run --rm -T \
  --entrypoint /bin/bash \
  jekyll \
  -lc '
    bundle install &&
    bundle exec jekyll build --destination /srv/jekyll/_site
  '

git checkout main

# 1. Añade los archivos de _site al index (aunque estén en el gitignore)
git add -f _site

git commit -m "About Updated"

# 3. Envía SOLO el contenido de la carpeta _site a la rama remota gh-pages
git push origin `git subtree split --prefix _site main`:gh-pages --force

# 4. Borra el commit temporal de tu rama main para mantenerla limpia
git reset --soft HEAD~1
git restore --staged _site

# Local: ejecutar docker compose up -d, si no va con docker compose up --build

#docker compose build --no-cache