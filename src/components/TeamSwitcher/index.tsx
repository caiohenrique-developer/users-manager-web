import { Ankr } from 'iconsax-reactjs'
import { Link } from 'react-router-dom'

import { SidebarMenu, SidebarMenuItem } from '@/components/ui/sidebar'

export function TeamSwitcher() {
  return (
    <SidebarMenu>
      <SidebarMenuItem className="flex gap-3 items-center justify-center m-auto">
        <Link to="/users">
          <Ankr variant="Bulk" className="text-gray-950 size-8 -ml-5" />
        </Link>

        <div className="grid flex-1 text-left text-lg">
          <strong className="truncate text-2xl text-gray-950 font-semibold tracking-widest">
            Acme Inc
          </strong>
          <span className="truncate text-gray-950 -mt-1 text-sm font-medium tracking-[4px]">
            Management
          </span>
        </div>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}
