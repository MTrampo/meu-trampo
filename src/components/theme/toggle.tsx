"use client"

import * as React from "react"
import { useEffect, useState } from "react";
import { FaDesktop, FaMoon, FaSun } from "react-icons/fa6";
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function ModeToggle() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button variant="outline" size="icon">
        <FaDesktop className="h-[1.2rem] w-[1.2rem] animate-pulse" />
        <span className="sr-only">Toggle theme (loading)</span>
      </Button>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          {theme === "system" ? (
            <FaDesktop className="h-[1.2rem] w-[1.2rem]" />
          ) : theme === "dark" ? (
            <FaMoon className="h-[1.2rem] w-[1.2rem]" />
          ) : (
            <FaSun className="h-[1.2rem] w-[1.2rem]" />
          )}
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="center">
        <DropdownMenuItem className="cursor-pointer" onClick={() => setTheme("light")}>
          <FaSun />
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="cursor-pointer" onClick={() => setTheme("dark")}>
          <FaMoon />
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="cursor-pointer" onClick={() => setTheme("system")}>
          <FaDesktop />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
