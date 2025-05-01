import { PrismaClient, Prisma } from "../lib/generated/prisma";

const prisma = new PrismaClient();

const userData: Prisma.UserCreateInput[] = [
  {
    name: "Hckerson",
    email: "Hckerson@gmail.com",
    role: "ADMIN",
    avatar: {
      create: [
        {
          image:
            "https://images.unsplash.com/photo-1700927450791-2b1c71f7a75b?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
      ],
    },
  },
  {
    name: "David Mitchell",
    email: "david.mitchell@example.com",
    role: "ADMIN",
    avatar: {
      create: [
        {
          image: "David Mitchell",
        },
      ],
    },
    team: {
      create: {
        bio: "25+ years of experience in investment banking and financial consulting. MBA from Wharton.",
        linkedIn: "https://www.linkedin.com/in/David-Mitchell",
        position: "Founder & CEO",
      },
    },
  },
  {
    name: "Jennifer Williams",
    email: "jennifer.williams@example.com",
    role: "ADMIN",
    avatar: {
      create: [
        {
          image: "Jennifer Williams",
        },
      ],
    },
    team: {
      create: {
        bio: "Certified Financial Planner with expertise in retirement planning and wealth management.",
        linkedIn: "https://www.linkedin.com/in/Jennifer-Williams",
        position: "Chief Financial Advisor",
      },
    },
  },
  {
    name: "Michael Rodriguez",
    email: "michael.rodriguez@example.com",
    role: "ADMIN",
    avatar: {
      create: [
        {
          image: "Michael Rodriguez",
        },
      ],
    },
    team: {
      create: {
        bio: "Former IRS advisor with deep knowledge of tax law and corporate tax strategy optimization.",
        linkedIn: "https://www.linkedin.com/in/Michael-Rodriguez",
        position: "Tax Specialist",
      },
    },
  },
  {
    name: "Amanda Chen",
    email: "amanda.chen@example.com",
    role: "ADMIN",
    avatar: {
      create: [
        {
          image: "Amanda Chen",
        },
      ],
    },
    team: {
      create: {
        bio: "15 years of experience in portfolio management and market analysis. CFA charterholder.",
        linkedIn: "https://www.linkedin.com/in/Amanda-Chen",
        position: "Investment Strategist",
      },
    },
  },
  {
    name: "Robert Johnson",
    email: "robert.johnson@example.com",
    role: "ADMIN",
    avatar: {
      create: [
        {
          image: "Robert Johnson",
        },
      ],
    },
    team: {
      create: {
        bio: "Expert in identifying and mitigating financial risks for both individuals and corporations.",
        linkedIn: "https://www.linkedin.com/in/Robert-Johnson",
        position: "Risk Management Specialist",
      },
    },
  },
  {
    name: "Sophia Patel",
    email: "sophia.patel@example.com",
    role: "ADMIN",
    avatar: {
      create: [
        {
          image: "Sophia Patel",
        },
      ],
    },
    team: {
      create: {
        bio: "Dedicated to ensuring exceptional client experiences and tailored financial solutions.",
        linkedIn: "https://www.linkedin.com/in/Sophia-Patel",
        position: "Client Relations Director",
      },
    },
  },
];

export async function main() {
  for (const u of userData) {
    await prisma.user.create({ data: u });
  }
}

main();
