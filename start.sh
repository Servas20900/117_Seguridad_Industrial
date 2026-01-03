#!/bin/bash
# Guía rápida de uso - Seguridad Industrial

echo "================================"
echo "🚀 Seguridad Industrial - Guía Rápida"
echo "================================"
echo ""

# Detectar el comando
case "$1" in
  dev)
    echo " Iniciando desarrollo (Conectado a DB Digital Ocean)..."
    echo "  Frontend: http://localhost:5173"
    echo "  Backend: http://localhost:3001"
    echo "  Admin: http://localhost:5173/admin-login"
    echo ""
    npm run dev:full
    ;;
    
  test)
    echo " Iniciando ambiente de testing..."
    echo "  Frontend: http://localhost:5174"
    echo "  Backend: http://localhost:3002"
    echo ""
    npm run test
    ;;
    
  test:docker)
    echo " Iniciando testing con Docker (BD local)..."
    echo "  Frontend: http://localhost:5174"
    echo "  Backend: http://localhost:3002"
    echo "  PostgreSQL: localhost:5433"
    echo ""
    docker-compose -f docker-compose.test.yml up
    ;;
    
  docker:prod)
    echo " Iniciando con Docker (Conectado a DB Digital Ocean)..."
    echo "  Frontend: http://localhost:5173"
    echo "  Backend: http://localhost:3001"
    echo ""
    docker-compose up
    ;;
    
  seed)
    echo " Poblando base de datos..."
    npm run db:seed
    ;;
    
  migrate)
    echo " Ejecutando migraciones..."
    npm run db:migrate
    ;;
    
  studio)
    echo " Abriendo Prisma Studio..."
    npm run db:studio
    ;;
    
  *)
    echo "Uso: $0 {dev|test|test:docker|docker:prod|seed|migrate|studio}"
    echo ""
    echo "Comandos:"
    echo "  dev          - Desarrollo (Connecta a DB Digital Ocean)"
    echo "  test         - Testing en local"
    echo "  test:docker  - Testing con Docker (BD aislada)"
    echo "  docker:prod  - Docker con DB Digital Ocean"
    echo "  seed         - Poblar BD con datos"
    echo "  migrate      - Ejecutar migraciones"
    echo "  studio       - Abrir Prisma Studio"
    echo ""
    exit 1
    ;;
esac
