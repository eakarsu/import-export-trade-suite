export type SourceDashboardAction = {
  id: string;
  label: string;
  description: string;
  href: string;
  sourceProjects: string[];
  examples: string[];
  count: number;
};

export const sourceDashboardActions: SourceDashboardAction[] = [
  {
    "id": "export-control-sanctions",
    "label": "Export Control Sanctions",
    "description": "Open Export Control Sanctions workflows elevated from AIExportControlSanctionsScreener.",
    "href": "/restricted-party-screening",
    "sourceProjects": [
      "AIExportControlSanctionsScreener"
    ],
    "examples": [
      "Restricted Party Screening",
      "Export Control Classification",
      "Trade Compliance Case"
    ],
    "count": 1
  }
];
