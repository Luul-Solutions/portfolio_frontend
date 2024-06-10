declare module "@heroicons/react/outline" {
  import * as React from "react";

  export interface IconProps extends React.SVGProps<SVGSVGElement> {
    title?: string;
    titleId?: string;
  }

  export const DocumentIcon: React.FC<IconProps>;
  export const BriefcaseIcon: React.FC<IconProps>;
  export const CodeIcon: React.FC<IconProps>;
  export const PhoneIcon: React.FC<IconProps>;
  // Add other icons as needed
}
