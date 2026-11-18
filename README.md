# 🔢 Fibonacci Lab — Interactive Fibonacci Calculator

> **Fibonacci Lab** is an interactive web-based learning tool designed to demonstrate how the Fibonacci sequence is generated using recursion. It allows users to enter a nonnegative integer, calculate its corresponding Fibonacci number, and explore the generated sequence through a simple and user-friendly interface. It also features simplified programming notation and educational explanations to help users understand recursion without requiring prior programming knowledge.

---

## ✨ Features

### 🧮 Calculator Features

- **Fibonacci Calculator** — Enter a nonnegative integer to calculate its corresponding Fibonacci number
- **Input Validation** — Prevent negative numbers, decimal values, empty inputs, and invalid entries
- **Preset Values** — Quickly test the calculator using predefined sample inputs
- **Instant Calculation** — Generate Fibonacci results directly through the interactive interface
- **Large Number Support** — Use JavaScript BigInt to handle large Fibonacci values accurately

### 📊 Learning Features

- **Sequence Display** — View all Fibonacci numbers from F(0) to the selected input
- **Selected Result Highlighting** — Easily identify the calculated Fibonacci number
- **Simplified Programming Notation** — Understand the input, process, and output through simplified instructions
- **Recursion Explanation** — Learn how recursive functions call themselves to solve smaller problems
- **Base Case and Recursive Case** — Understand the two important parts of the Fibonacci recursive function
- **Memoization** — Demonstrate how previously calculated values are stored to avoid unnecessary repeated calculations
- **Recursive Call Counter** — Display the number of function calls made during the calculation

### 🎨 Interface Features

- **User-Friendly Interface** — Simple layout designed for programmers and nonprogrammers
- **Interactive Components** — Buttons and input fields for calculating and exploring Fibonacci numbers
- **Responsive Design** — Support desktop, tablet, and mobile devices
- **Learning Section** — Provide explanations and examples of the Fibonacci sequence and recursion

> **Note:** Fibonacci Lab is developed as an educational project for Learning Evidence 2. The application focuses on demonstrating recursive problem-solving through an interactive and accessible web interface.

---

## 🧰 Tech Stack

| **Layer** | **Technology** |
|---|---|
| **Frontend Framework** | [React](https://react.dev/) |
| **Programming Language** | [TypeScript](https://www.typescriptlang.org/) |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/) |
| **Build Tool** | [Vite](https://vite.dev/) |
| **Package Manager** | [pnpm](https://pnpm.io/) |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **Calculation Method** | Recursive Algorithm |
| **Optimization** | Memoization |
| **Number Handling** | JavaScript BigInt |

---

## 🛠️ Prerequisites

Before running the project, make sure the following tools are installed:

- **[Node.js](https://nodejs.org/)** — Use a version compatible with Vite and the project's dependencies.
- **[pnpm](https://pnpm.io/)** — Package manager used to install and manage dependencies.
- **[Git](https://git-scm.com/)** — Version control system.

---

## 📦 Package Manager & Development Commands

Fibonacci Lab uses **pnpm** to manage project dependencies and **Vite** to run the frontend development server. Tailwind CSS is integrated through the Vite plugin, while TypeScript provides type safety throughout the application.

### 🛠️ Installation

#### 1. Install pnpm

```bash
npm install -g pnpm
pnpm -v
```

#### 2. Create the Vite Project

```bash
pnpm create vite fibonacci-lab --template react-ts
cd fibonacci-lab
```

#### 3. Install Project Dependencies

```bash
pnpm install
```

#### 4. Install Tailwind CSS

```bash
pnpm add tailwindcss @tailwindcss/vite
```

#### 5. Install Lucide React

```bash
pnpm add lucide-react
```

#### 6. Install React Type Definitions

These are included in the standard React TypeScript Vite template. If they are missing, install them using:

```bash
pnpm add -D @types/react @types/react-dom
```

---

### 🚀 Development Commands

Run these commands inside the project directory.

| **Command** | **Description** |
|---|---|
| `pnpm install` | Install project dependencies |
| `pnpm dev` | Start the Vite development server |
| `pnpm build` | Build the project for production |
| `pnpm preview` | Preview the production build locally |
| `pnpm add <package>` | Install a production dependency |
| `pnpm add -D <package>` | Install a development dependency |
| `pnpm remove <package>` | Remove a dependency |
| `pnpm update` | Update dependencies within the allowed version ranges |


### 🏗️ Production Build

Generate an optimized production version of the application:

```bash
pnpm build
```

Preview the production build locally:

```bash
pnpm preview
```

## 📄 License

The project license has not yet been determined. Add a `LICENSE` file and update this section once the team has agreed on the licensing terms.