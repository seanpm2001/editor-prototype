import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import styles from './document-options.module.css'
import MoreVert from '@mui/icons-material/MoreVert'

export function DocumentOptions() {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className={styles.trigger}>
        <MoreVert />
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className={styles.root}
          side="bottom"
          align="end"
          sideOffset={4}
          avoidCollisions={false}
        >
          <DropdownMenu.Item className={styles.menuItem}>
            Archive
          </DropdownMenu.Item>
          <DropdownMenu.Item className={styles.menuItem}>
            Duplicate
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}
