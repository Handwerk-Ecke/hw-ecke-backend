#!/bin/bash
# Знаходимо вільний порт між 3000 і 3100
# PORT=$(comm -23 <(seq 3000 3100 | sort) <(ss -tuln | awk '{print $5}' | grep -o '[0-9]*$' | sort -u) | head -n 1)
PORT=1337

echo "🔹 Запускаю Strapi на порту $PORT..."

# Запускаємо Strapi із змінною PORT
PORT=$PORT npm run start
