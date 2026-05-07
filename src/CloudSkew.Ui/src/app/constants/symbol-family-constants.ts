export enum SymbolFamilyConstants {
    None = 0,

    General = 1,

    AWS = 2,
    Azure = 4,
    GCP = 8,
    IBM = 16,
    Oracle = 32,
    DigitalOcean = 64,
    Alibaba = 128,
    K8s_CNCF_Ecosystem = 256,
    Elastic = 512,
    VMWare = 1024,
    FontAwesome = 2048,
    HashiCorp = 4096,
    Cloudflare = 8192,

    Default = 7, // General + AWS + Azure
}
