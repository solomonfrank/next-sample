// localhost:3000, abc.delivery.com, zdq.delivery.com

export const getSubdomain = (url: string): string => {
  const urlParts = url.split(".");

  const isLocalhost = urlParts.slice(-1)[0].includes("localhost");
  let sliceTill = -2;

  if (isLocalhost) {
    sliceTill = -1;
  }

  const subdomain = urlParts.slice(0, sliceTill).join("");
  console.log("subdomain", subdomain);
  return subdomain;
};
