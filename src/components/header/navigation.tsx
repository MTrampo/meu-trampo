"use client"

import * as React from "react"
import Link from "next/link"

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationTriggerStyle,
} from "@/components/ui/navigation-menu"

export function Navigation() {
  return (
    <NavigationMenu viewport={false}>
      <NavigationMenuList>

        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationTriggerStyle()}>
            <Link href="/solucoes">Soluções</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationTriggerStyle()}>
            <Link href="/nucleo">Núcleo</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>


      </NavigationMenuList>
    </NavigationMenu>
  )
}
