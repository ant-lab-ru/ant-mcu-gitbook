# ant-mcu-gitbook

Автоматическая конвертация Obsidian vault в GitBook.

## Как это работает

1. При push в репозиторий `ant-lab-ru/ant-mcu` запускается workflow
2. Workflow триггерит `build-gitbook.yml` в этом репозитории
3. Скрипт клонирует Obsidian vault, конвертирует в формат GitBook
4. Результат коммитится в папку `gitbook/`
5. GitBook синхронизируется с этой папкой

## Настройка

1. Добавьте секрет `DEPLOY_PAT` с Personal Access Token
2. Подключите GitBook к этому репозиторию (папка `gitbook/`)
