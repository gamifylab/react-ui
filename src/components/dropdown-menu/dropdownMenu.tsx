import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import React, { ReactNode } from 'react';


/* -----------------------------------------------------------------------------
DropDown Root
--------------------------------------------------------------------------------
*/

interface DropdownRootProps extends React.ComponentProps<typeof DropdownMenu.Root> {
    children?: ReactNode;
  }

 const DropDownRoot = ({children, ...rest}: DropdownRootProps) => {
    return (
        <DropdownMenu.Root {...rest}>
            {children}
        </DropdownMenu.Root>
    )
} 

DropDownRoot.displayName = 'DropDownRoot';

/* -----------------------------------------------------------------------------
DropDown Trigger
--------------------------------------------------------------------------------
*/

interface DropdownTriggerProps extends React.ComponentProps<typeof DropdownMenu.Trigger> {
    children?: ReactNode;
  }

 const DropDownTrigger = ({children, ...rest}: DropdownTriggerProps) => {
    return (
        <DropdownMenu.Trigger {...rest}>
            {children}
        </DropdownMenu.Trigger>
    )
} 

DropDownTrigger.displayName = 'DropDownTrigger';


/* -----------------------------------------------------------------------------
DropDown Portal
--------------------------------------------------------------------------------
*/

interface DropdownPortalProps extends React.ComponentProps<typeof DropdownMenu.Portal> {
    children?: ReactNode;
  }

 const DropDownPortal = ({children, ...rest}: DropdownPortalProps) => {
    return (
        <DropdownMenu.Portal {...rest}>
            {children}
        </DropdownMenu.Portal>
    )
} 

DropDownPortal.displayName = 'DropDownPortal';


/* -----------------------------------------------------------------------------
DropDown Content
--------------------------------------------------------------------------------
*/


interface DropdownContentProps extends React.ComponentProps<typeof DropdownMenu.Content> {
    children?: ReactNode;
  }

 const DropDownContent = ({children, ...rest}: DropdownContentProps) => {
    return (
        <DropdownMenu.Content {...rest}>
            {children}
        </DropdownMenu.Content>
    )
} 

DropDownContent.displayName = 'DropDownContent';


/* -----------------------------------------------------------------------------
DropDown Arrow
--------------------------------------------------------------------------------
*/

interface DropdownArrowProps extends React.ComponentProps<typeof DropdownMenu.Arrow>{}

 const DropDownArrow = ({...rest}: DropdownArrowProps) => {
    return (
        <DropdownMenu.Arrow {...rest}/>
    )
} 

DropDownArrow.displayName = 'DropDownArrow';


/* -----------------------------------------------------------------------------
DropDown Item
--------------------------------------------------------------------------------
*/

interface DropdownItemProps extends React.ComponentProps<typeof DropdownMenu.Item>{
    children: ReactNode
}

 const DropDownItem = ({children,...rest}: DropdownItemProps) => {
    return (
        <DropdownMenu.Item {...rest}>
        {children}
        </DropdownMenu.Item>
    )
} 

DropDownArrow.displayName = 'DropDownArrow';


/* -----------------------------------------------------------------------------
DropDown Group
--------------------------------------------------------------------------------
*/

interface DropdownGroupProps extends React.ComponentProps<typeof DropdownMenu.Group>{
    children: ReactNode
}

 const DropDownGroup = ({children,...rest}: DropdownGroupProps) => {
    return (
        <DropdownMenu.Group {...rest}>
        {children}
        </DropdownMenu.Group>
    )
} 

DropDownGroup.displayName = 'DropDownGroup';


/* -----------------------------------------------------------------------------
DropDown Label
--------------------------------------------------------------------------------
*/

interface DropdownLabelProps extends React.ComponentProps<typeof DropdownMenu.Label>{
    children: ReactNode
}

 const DropDownLabel = ({children,...rest}: DropdownLabelProps) => {
    return (
        <DropdownMenu.Label {...rest}>
        {children}
        </DropdownMenu.Label>
    )
} 

DropDownLabel.displayName = 'DropDownLabel';


/* -----------------------------------------------------------------------------
DropDown CheckboxItem
--------------------------------------------------------------------------------
*/

interface DropdownCheckBoxITemProps extends React.ComponentProps<typeof DropdownMenu.CheckboxItem>{
    children: ReactNode
}

 const DropDownCheckBoxItem = ({children,...rest}: DropdownCheckBoxITemProps) => {
    return (
        <DropdownMenu.CheckboxItem {...rest}>
        {children}
        </DropdownMenu.CheckboxItem>
    )
} 

DropDownCheckBoxItem.displayName = 'DropDownCheckBoxItem';


/* -----------------------------------------------------------------------------
DropDown Radio Group
--------------------------------------------------------------------------------
*/

interface DropdownRadioGroupProps extends React.ComponentProps<typeof DropdownMenu.RadioGroup>{
    children: ReactNode
}

 const DropDownRadioGroup = ({children,...rest}: DropdownRadioGroupProps) => {
    return (
        <DropdownMenu.RadioGroup {...rest}>
        {children}
        </DropdownMenu.RadioGroup>
    )
} 

DropDownRadioGroup.displayName = 'DropDownRadioGroup';


/* -----------------------------------------------------------------------------
DropDown Radio Item
--------------------------------------------------------------------------------
*/

interface DropdownRadioItemProps extends React.ComponentProps<typeof DropdownMenu.RadioItem>{
    children: ReactNode
}

 const DropDownRadioItem = ({children,...rest}: DropdownRadioItemProps) => {
    return (
        <DropdownMenu.RadioItem {...rest}>
        {children}
        </DropdownMenu.RadioItem>
    )
} 

DropDownRadioItem.displayName = 'DropDownRadioItem';


/* -----------------------------------------------------------------------------
DropDown Radio Item
--------------------------------------------------------------------------------
*/

interface DropdownItemIndicatorProps extends React.ComponentProps<typeof DropdownMenu.ItemIndicator>{}

 const DropDownItemIndicator = ({...rest}: DropdownItemIndicatorProps) => {
    return (
        <DropdownMenu.ItemIndicator {...rest}/>
    )
} 

DropDownItemIndicator.displayName = 'DropDownItemIndicator';


/* -----------------------------------------------------------------------------
DropDown Separator
--------------------------------------------------------------------------------
*/

interface DropdownSeparatorProps extends React.ComponentProps<typeof DropdownMenu.Separator>{}

 const DropDownSeparator = ({...rest}: DropdownSeparatorProps) => {
    return (
        <DropdownMenu.Separator {...rest}/>
    )
} 

DropDownSeparator.displayName = 'DropDownSeparator';


/* -----------------------------------------------------------------------------
DropDown Sub
--------------------------------------------------------------------------------
*/

interface DropdownSub extends React.ComponentProps<typeof DropdownMenu.Sub>{
    children: ReactNode
}

 const DropDownSub = ({children,...rest}: DropdownSub) => {
    return (
        <DropdownMenu.Sub {...rest}>
        {children}
        </DropdownMenu.Sub>
    )
} 

DropDownSub.displayName = 'DropDownSub';


/* -----------------------------------------------------------------------------
DropDown Sub Trigger
--------------------------------------------------------------------------------
*/

interface DropdownSubTrigger extends React.ComponentProps<typeof DropdownMenu.SubTrigger>{
    children: ReactNode
}

 const DropDownSubTrigger = ({children,...rest}: DropdownSubTrigger) => {
    return (
        <DropdownMenu.SubTrigger {...rest}>
        {children}
        </DropdownMenu.SubTrigger >
    )
} 

DropDownSubTrigger.displayName = 'DropDownSubTrigger';


/* -----------------------------------------------------------------------------
DropDown Sub Content
--------------------------------------------------------------------------------
*/

interface DropdownSubContent extends React.ComponentProps<typeof DropdownMenu.SubContent>{
    children: ReactNode
}

 const DropDownSubContent = ({children,...rest}: DropdownSubContent) => {
    return (
        <DropdownMenu.SubContent {...rest}>
        {children}
        </DropdownMenu.SubContent >
    )
} 

DropDownSubContent.displayName = 'DropDownSubContent';


/* -----------------------------------------------------------------------------
Exports
--------------------------------------------------------------------------------
*/

export {
DropDownRoot,
DropDownTrigger,
DropDownPortal,
DropDownContent,
DropDownArrow,
DropDownItem,
DropDownGroup,
DropDownLabel,
DropDownCheckBoxItem,
DropDownRadioGroup,
DropDownRadioItem,
DropDownItemIndicator,
DropDownSeparator,
DropDownSub,
DropDownSubTrigger,
DropDownSubContent
}