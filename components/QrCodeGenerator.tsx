"use client";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LayoutGridIcon, Link, Mail } from "lucide-react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";

type Props = {};

const QrCodeGenerator = (props: Props) => {
  const [url, setUrl] = useState("");
  const [color, setColor] = useState("#ffffff");
  const [bgColor, setBgColor] = useState("#000000");
  const [logo, setLogo] = useState<string | null>("");
  const [logoFile, setLogoFile] = useState<File | null>(null);
  const [qrType, setQrType] = useState("link");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  return (
    <div className="relative z-10 mx-6 flex max-w-[1250px] w-full min-h-[700px] h-full">
      <Card className="flex-1 flex flex-col p-4 isolate w-full h-auto mx-auto rounded-xl shadow-lg bg-white/20 backdrop-filter backdrop-blur-xl border ring-1 ring-black/5 justify-center">
        <CardHeader>
          {/* <CardTitle className="text-3xl font-bold text-center text-black mb-2">
            QR Code Generator
          </CardTitle> */}
          <CardContent className="flex-1">
            <div className="h-full flex flex-col md:flex-row gap-8">
              <div className="flex-1 space-y-6">
                <Tabs
                  defaultValue={"link"}
                  onValueChange={(val) => setQrType(val)}
                  className="space-y-6"
                >
                  <TabsList className="h-10 w-full grid grid-cols-2 bg-black text-lg rounded-lg">
                    <TabsTrigger value="link" className="text-white font-bold">
                      <Link className="w-4 h-4 mr-2" />
                      Link
                    </TabsTrigger>
                    <TabsTrigger value="email" className="text-white font-bold">
                      <Mail className="w-4 h-4 mr-2" />
                      Email
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="link">
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <Label
                          className="font-semibold text-gray-800"
                          htmlFor="url"
                        >
                          URL
                        </Label>
                        <Input
                          id="url"
                          type="text"
                          value={url}
                          onChange={(e) => setUrl(e.target.value)}
                          className="w-full border-2 border-white/70 rounded-md outline-none placeholder:text-gray-300 focus:border-black/60"
                        />
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
                <div className="space-y-4">
                  <div className="flex md:flex-col md:gap-4">
                    <div className="space-y-2 flex-1">
                      <Label
                        htmlFor="color"
                        className="font-semibold text-gray-800"
                      >
                        QR Code Color
                      </Label>
                      <div className="flex items-center gap-1">
                        <div
                          className="relative w-12 flex-1 h-12 rounded-md border-2 border-white/70"
                          style={{ backgroundColor: color }}
                        >
                          <input
                            type="color"
                            value={color}
                            onChange={(e) => setColor(e.target.value)}
                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                          />
                        </div>
                        <Input
                          type="text"
                          value={color}
                          onChange={(e) => setColor(e.target.value)}
                          className="flex-1 border-2 h-12 border-white/70 rounded-md outline-none placeholder:text-gray-300 focus:border-black/60"
                        />
                      </div>
                    </div>
                    <div className="space-y-2 flex-1">
                      <Label
                        htmlFor="color"
                        className="font-semibold text-gray-800"
                      >
                        Background Color
                      </Label>
                      <div className="flex items-center gap-1">
                        <div
                          className="relative w-12 flex-1 h-12 rounded-md border-2 border-white/70"
                          style={{ backgroundColor: bgColor }}
                        >
                          <input
                            type="color"
                            value={bgColor}
                            onChange={(e) => setBgColor(e.target.value)}
                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                          />
                        </div>
                        <Input
                          type="text"
                          value={bgColor}
                          onChange={(e) => setBgColor(e.target.value)}
                          className="flex-1 border-2 h-12 border-white/70 rounded-md outline-none placeholder:text-gray-300 focus:border-black/60"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="logo" className="font-bold text-gray-800">
                      Logo
                    </Label>
                    <Input
                      type="file"
                      id="logo"
                      accept="image/*"
                      onChange={(e: any) => {
                        if (e.target.files && e.target.files[0]) {
                          setLogoFile(e.target.files[0]);

                          const reader = new FileReader();
                          reader.onloadend = () => {
                            setLogo(reader.result as string);
                            reader.readAsDataURL(e.target.files[0]);
                          };
                        }
                      }}
                      className="w-full border-2 bg-transparent border-white/70 focus:border-black/60"
                    />
                  </div>
                </div>
              </div>
              <div className="relative h-[570px] flex-1 bg-transparent rounded-lg flex flex-col justify-center items-center space-y-6 text-white border-2 border-white/70">
                <span>
                  <LayoutGridIcon className="absolute w-8 h-8 text-white top-4 right-4" />
                </span>
              </div>
            </div>
          </CardContent>
        </CardHeader>
      </Card>
    </div>
  );
};

export default QrCodeGenerator;
