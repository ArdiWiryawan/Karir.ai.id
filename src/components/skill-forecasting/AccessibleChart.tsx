import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Download, Table as TableIcon, BarChart3, HelpCircle } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface DataPoint {
  date: string;
  skill: string;
  demand: number;
  confidence: {
    low: number;
    median: number;
    high: number;
  };
}

interface AccessibleChartProps {
  title: string;
  description?: string;
  data: DataPoint[];
  timeHorizon?: string;
}

export const AccessibleChart = ({ 
  title, 
  description, 
  data,
  timeHorizon = "6 bulan" 
}: AccessibleChartProps) => {
  const [viewMode, setViewMode] = useState<"chart" | "table">("chart");
  
  const handleExportCSV = () => {
    const headers = ["Tanggal", "Skill", "Demand Median", "CI Low (75%)", "CI High (75%)"];
    const rows = data.map(d => [
      d.date,
      d.skill,
      d.confidence.median.toString(),
      d.confidence.low.toString(),
      d.confidence.high.toString()
    ]);
    
    const csvContent = [
      headers.join(","),
      ...rows.map(row => row.join(","))
    ].join("\n");
    
    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `forecast-${Date.now()}.csv`;
    link.click();
    URL.revokeObjectURL(url);
  };
  
  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <CardTitle>{title}</CardTitle>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <button className="text-muted-foreground hover:text-foreground">
                      <HelpCircle className="w-4 h-4" />
                    </button>
                  </TooltipTrigger>
                  <TooltipContent className="max-w-sm">
                    <div className="space-y-2 text-sm">
                      <p><strong>Confidence Interval (75%):</strong> Area berbayang menunjukkan rentang prediksi dengan confidence 75%</p>
                      <p><strong>Median Line:</strong> Garis tengah menunjukkan prediksi paling mungkin</p>
                      <p><strong>Absolute Dates:</strong> Tanggal menggunakan format absolut untuk perencanaan akurat</p>
                    </div>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            {description && (
              <CardDescription>{description}</CardDescription>
            )}
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Badge variant="outline" className="text-xs">
                Time Horizon: {timeHorizon}
              </Badge>
              <Badge variant="outline" className="text-xs">
                Model v1.3
              </Badge>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <Tabs value={viewMode} onValueChange={(v) => setViewMode(v as "chart" | "table")}>
              <TabsList>
                <TabsTrigger value="chart" className="text-xs">
                  <BarChart3 className="w-3 h-3 mr-1" />
                  Chart
                </TabsTrigger>
                <TabsTrigger value="table" className="text-xs">
                  <TableIcon className="w-3 h-3 mr-1" />
                  Data
                </TabsTrigger>
              </TabsList>
            </Tabs>
            
            <Button 
              variant="outline" 
              size="sm"
              onClick={handleExportCSV}
              className="text-xs"
              aria-label="Export data to CSV"
            >
              <Download className="w-3 h-3 mr-1" />
              Export CSV
            </Button>
          </div>
        </div>
      </CardHeader>
      
      <CardContent>
        {viewMode === "chart" ? (
          <div className="space-y-4">
            {/* Placeholder for actual chart with prediction ribbon */}
            <div 
              className="w-full h-[400px] bg-muted/30 rounded-lg border border-border/50 flex items-center justify-center"
              role="img"
              aria-label={`Forecast chart for ${title} showing prediction with 75% confidence interval`}
              tabIndex={0}
            >
              <div className="text-center text-muted-foreground">
                <BarChart3 className="w-16 h-16 mx-auto mb-4 opacity-50" />
                <p className="text-sm">Chart dengan Prediction Ribbon (75% CI)</p>
                <p className="text-xs mt-2">
                  Grafik menampilkan median prediksi dengan area confidence interval
                </p>
              </div>
            </div>
            
            {/* Colorblind-safe legend */}
            <div className="flex flex-wrap gap-4 justify-center text-sm">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full" style={{ backgroundColor: '#1B9E77' }}></div>
                <span>Skill A (High Demand)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full" style={{ backgroundColor: '#D95F02' }}></div>
                <span>Skill B (Medium Demand)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full" style={{ backgroundColor: '#7570B3' }}></div>
                <span>Skill C (Low Demand)</span>
              </div>
            </div>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Tanggal</TableHead>
                  <TableHead>Skill</TableHead>
                  <TableHead className="text-right">Demand Median</TableHead>
                  <TableHead className="text-right">CI Low (75%)</TableHead>
                  <TableHead className="text-right">CI High (75%)</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {data.map((point, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{point.date}</TableCell>
                    <TableCell>{point.skill}</TableCell>
                    <TableCell className="text-right">{point.confidence.median}</TableCell>
                    <TableCell className="text-right text-muted-foreground">
                      {point.confidence.low}
                    </TableCell>
                    <TableCell className="text-right text-muted-foreground">
                      {point.confidence.high}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        )}
      </CardContent>
    </Card>
  );
};
