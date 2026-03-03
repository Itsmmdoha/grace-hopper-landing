# Grace Hopper - Analytical Competition Landing Page

A landing page for the **Grace Hopper Analytical Challenge**, an exclusive analytical competition for women hosted by BRAC University Computer Club (BUCC).

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- [pnpm](https://pnpm.io/) package manager

### Installation

1. Clone the repository:

```bash
git clone https://github.com/itsmmdoha/grace-hopper-landing
cd grace-hopper-landing
```

2. Install dependencies:

```bash
pnpm install
```

3. Start the development server:

```bash
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Configuration

All event details are managed through a single YAML configuration file located at:

```
config/event.yaml
```

You can edit this file to update:

- **Hero section** - title, tagline, and description
- **Event details** - date, deadline, venue, registration link, eligibility
- **Past event** - name, participant count, stats
- **Sponsors** - list of sponsor names
- **Footer** - credit text and links

After editing the YAML file, the changes will be reflected on the page automatically (with hot reload in dev mode).

### Building for Production

```bash
pnpm build
pnpm start
```

## Tech Stack

- [Next.js 16](https://nextjs.org/) - React framework
- [Tailwind CSS 4](https://tailwindcss.com/) - Utility-first CSS
- [shadcn/ui](https://ui.shadcn.com/) - UI components
- [js-yaml](https://github.com/nodeca/js-yaml) - YAML parsing
- [Lucide React](https://lucide.dev/) - Icons

## License

Built with care by BRAC University Computer Club (BUCC).
