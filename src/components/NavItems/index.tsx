import { ArrowRight2 } from 'iconsax-reactjs'
import { Link, useLocation } from 'react-router-dom'

import type { NavItemsProps } from '@/components/NavItems/NavItems.type'
import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar'

export function NavItems({ menuItemList }: NavItemsProps) {
  const { pathname } = useLocation()

  return (
    <SidebarGroup className="group-data-[collapsible=icon]:hidden">
      <SidebarMenu className="grid gap-4">
        {menuItemList.map(item => (
          <SidebarMenuItem key={item.name}>
            <SidebarMenuButton
              asChild
              aria-disabled={item.url === '#'}
              className={`group text-white hover:text-white hover:bg-purple/50 focus:bg-purple aria-disabled:hover:bg-white aria-disabled:focus:bg-white aria-disabled:hover:text-blue-50 aria-disabled:cursor-not-allowed aria-disabled:pointer-events-auto h-10 transition-all transition-discrete ${pathname === item.url && 'bg-purple'} ${!(pathname === item.url) && 'text-blue-50'}`}
            >
              <Link to={item.url}>
                <item.icon
                  variant="Bulk"
                  className="!w-6 !h-6 group-focus:text-white group-aria-disabled:text-blue-50"
                />
                <span className="text-base w-full group-focus:text-white group-aria-disabled:text-blue-50">
                  {item.name}
                </span>
                <ArrowRight2 className="!w-5 !h-5 group-focus:text-white group-aria-disabled:text-blue-50" />
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  )
}
