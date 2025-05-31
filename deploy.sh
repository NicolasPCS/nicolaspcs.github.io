#!/bin/bash
echo "🛠️ Generando sitio..."
docker compose run --rm jekyll bundle exec jekyll build || { echo "❌ Error al generar el sitio"; exit 1; }

echo "🚀 Publicando en ~/html/"
cp -a _site/. ~/html/ || { echo "❌ Error al copiar archivos"; exit 1; }

echo "✅ Sitio desplegado exitosamente en el dominio."