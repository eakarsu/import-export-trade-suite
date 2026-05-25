# Import Export Trade Suite

Wave:
- Portfolio next-20 completion batch

Source candidates represented:
- `AIImportExportTradeAssistant`
- `AIImportExportTradeOperations`
- `AIImportExportTradeAnalytics`
- `AIImportExportTradeWorkflow`

This suite is a runnable merged app with one login, one dashboard, one feature-first sidebar, PostgreSQL-backed records/documents/notifications/audit, role behavior, and smoke coverage.

## Local Run

```bash
cd /Users/erolakarsu/projects/merged/import-export-trade-suite
./start.sh
```

Local URL:
- `http://127.0.0.1:5410`

Seeded users:
- `admin@import-export-trade.local / admin123`
- `manager@import-export-trade.local / manager123`
- `analyst@import-export-trade.local / analyst123`

## Validation

```bash
cd /Users/erolakarsu/projects/merged/import-export-trade-suite/frontend
npm run typecheck
SMOKE_BASE_URL=http://127.0.0.1:5410 npm run smoke
```
