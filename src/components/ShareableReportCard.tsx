import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import {
  Share2,
  Linkedin,
  Twitter,
  Facebook,
  Copy,
  Download,
  Award,
  TrendingUp,
  Target,
  Calendar,
  Star,
  Gift
} from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

interface ReportData {
  title: string;
  type: string;
  date: string;
  insights: string[];
  score: number;
  trend: string;
  recommendations: string[];
}

const ShareableReportCard = ({ reportData }: { reportData: ReportData }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [sharePlatform, setSharePlatform] = useState('');
  const [customMessage, setCustomMessage] = useState('');
  const [shareUrl, setShareUrl] = useState('');
  const [referralCode, setReferralCode] = useState('CAREER2025');

  const { toast } = useToast();

  const generateShareUrl = () => {
    const baseUrl = window.location.origin;
    const reportId = reportData.title.toLowerCase().replace(/\s+/g, '-');
    return `${baseUrl}/shared/${reportId}?ref=${referralCode}`;
  };

  const handleShare = (platform: string) => {
    const url = generateShareUrl();
    const text = `Check out my career insights: ${reportData.title} - ${customMessage || 'Discover your future skills!'}`;

    let shareLink = '';

    switch (platform) {
      case 'linkedin':
        shareLink = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}&title=${encodeURIComponent(text)}`;
        break;
      case 'twitter':
        shareLink = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`;
        break;
      case 'facebook':
        shareLink = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
        break;
      default:
        return;
    }

    window.open(shareLink, '_blank', 'width=600,height=400');

    toast({
      title: "Shared Successfully!",
      description: `Your report has been shared on ${platform}.`,
    });
  };

  const handleCopyLink = () => {
    const url = generateShareUrl();
    navigator.clipboard.writeText(url);

    toast({
      title: "Link Copied!",
      description: "Share link has been copied to clipboard.",
    });
  };

  const handleCopyReferralCode = () => {
    navigator.clipboard.writeText(referralCode);

    toast({
      title: "Referral Code Copied!",
      description: "Share this code with friends to earn rewards.",
    });
  };

  const handleDownload = () => {
    toast({
      title: "Download Started",
      description: "Generating your report card...",
    });

    // Simulate download
    setTimeout(() => {
      toast({
        title: "Download Complete",
        description: "Report card has been downloaded successfully.",
      });
    }, 2000);
  };

  const defaultMessages = {
    linkedin: "I'm excited to share my career insights! This report shows my readiness for future job market trends. #CareerDevelopment #FutureSkills",
    twitter: "Just got my career forecast! 🚀 Check out these insights about future skills and job trends. #CareerAdvice #FutureOfWork",
    facebook: "Proud to share my career development journey! This report shows how I'm preparing for the future of work. Check it out!"
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm">
          <Share2 className="w-4 h-4 mr-2" />
          Share Report
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            Share Your Career Insights
          </DialogTitle>
          <DialogDescription>
            Share your report card with your network and showcase your career readiness
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {/* Report Preview */}
          <Card className="border-primary/20">
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-lg">{reportData.title}</CardTitle>
                  <CardDescription className="flex items-center gap-2 mt-1">
                    <Calendar className="w-4 h-4" />
                    {reportData.date}
                  </CardDescription>
                </div>
                <Badge variant="default" className="flex items-center gap-1">
                  <Award className="w-3 h-3" />
                  {reportData.score}% Ready
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-3 bg-primary/5 rounded-lg">
                  <div className="text-lg font-bold text-primary">{reportData.score}%</div>
                  <div className="text-sm text-muted-foreground">Career Readiness</div>
                </div>
                <div className="text-center p-3 bg-secondary/5 rounded-lg">
                  <div className="text-lg font-bold text-secondary flex items-center justify-center gap-1">
                    <TrendingUp className="w-4 h-4" />
                    {reportData.trend}
                  </div>
                  <div className="text-sm text-muted-foreground">Market Trend</div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="text-sm font-medium">Key Insights:</div>
                <div className="flex flex-wrap gap-2">
                  {reportData.insights.slice(0, 3).map((insight, idx) => (
                    <Badge key={idx} variant="secondary" className="text-xs">
                      {insight}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <div className="text-sm font-medium">Top Recommendations:</div>
                <div className="text-sm text-muted-foreground">
                  {reportData.recommendations.slice(0, 2).join(' • ')}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Share Options */}
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="platform">Share on Platform</Label>
              <Select value={sharePlatform} onValueChange={setSharePlatform}>
                <SelectTrigger>
                  <SelectValue placeholder="Choose platform" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="linkedin">
                    <div className="flex items-center gap-2">
                      <Linkedin className="w-4 h-4" />
                      LinkedIn
                    </div>
                  </SelectItem>
                  <SelectItem value="twitter">
                    <div className="flex items-center gap-2">
                      <Twitter className="w-4 h-4" />
                      Twitter
                    </div>
                  </SelectItem>
                  <SelectItem value="facebook">
                    <div className="flex items-center gap-2">
                      <Facebook className="w-4 h-4" />
                      Facebook
                    </div>
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Custom Message (Optional)</Label>
              <Textarea
                id="message"
                placeholder="Add a personal message..."
                value={customMessage}
                onChange={(e) => setCustomMessage(e.target.value)}
                rows={3}
              />
              <div className="text-xs text-muted-foreground">
                {sharePlatform && defaultMessages[sharePlatform as keyof typeof defaultMessages]}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="share-url">Share Link</Label>
              <div className="flex gap-2">
                <Input
                  id="share-url"
                  value={generateShareUrl()}
                  readOnly
                  className="flex-1"
                />
                <Button variant="outline" size="sm" onClick={handleCopyLink}>
                  <Copy className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <Button
              onClick={() => handleShare(sharePlatform)}
              disabled={!sharePlatform}
              className="flex-1"
            >
              <Share2 className="w-4 h-4 mr-2" />
              Share on {sharePlatform}
            </Button>
            <Button variant="outline" onClick={handleDownload} className="flex-1">
              <Download className="w-4 h-4 mr-2" />
              Download Card
            </Button>
          </div>

          {/* Achievement Badge */}
          <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="font-semibold">Future-Ready Badge Earned!</div>
                  <div className="text-sm text-muted-foreground">
                    Share this achievement to showcase your career preparation
                  </div>
                </div>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`w-4 h-4 ${
                        star <= Math.floor(reportData.score / 20)
                          ? 'fill-yellow-400 text-yellow-400'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Referral Incentive */}
          <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <Gift className="w-5 h-5 text-green-600" />
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-green-800">Referral Rewards Program</div>
                  <div className="text-sm text-green-600 mb-2">
                    Get 1 month free premium when someone signs up via your link
                  </div>
                  <div className="text-xs text-green-700">
                    Your referral code: <span className="font-mono font-bold">{referralCode}</span>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-green-300 text-green-700 hover:bg-green-50"
                    onClick={handleCopyReferralCode}
                  >
                    <Copy className="w-3 h-3 mr-1" />
                    Copy Code
                  </Button>
                  <div className="text-xs text-center text-green-600">
                    3/5 referrals completed
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ShareableReportCard;