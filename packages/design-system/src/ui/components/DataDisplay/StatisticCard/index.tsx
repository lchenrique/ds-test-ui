import { ReactElement } from "react";
import { SymbolTag } from "../../General";
import { Text } from "../../Typography";
import { Box } from "../Box";

export interface StatisticCardProps {
  icon: ReactElement;
  title: string;
  total: number;
}

function StatisticCard({ icon, total, title }: StatisticCardProps) {
  return (
    <Box className="flex items-center gap-6 h-full">
      <SymbolTag icon={icon} />
      <div className="text-left">
        <Text as="h3">{total}</Text>
        <Text as="span" className="text-xs font-semibold">
          {title}
        </Text>
      </div>
    </Box>
  );
}

export { StatisticCard };
