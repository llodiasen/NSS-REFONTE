// NOUVEAU — Mission 4 : Document PDF Présentation NSS
// Utilisé côté client uniquement via dynamic import
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
} from "@react-pdf/renderer";

// Palette NSS
const COLOR = {
  primary900: "#1b4332",
  primary700: "#2d6a4f",
  primary300: "#74c69d",
  primary50:  "#f0fff4",
  earth500:   "#cd853f",
  earth100:   "#fff5e6",
  neutral800: "#1f1f1f",
  neutral600: "#4a4a4a",
  neutral100: "#f5f5f5",
  white:      "#ffffff",
};

const styles = StyleSheet.create({
  page: {
    fontFamily: "Helvetica",
    backgroundColor: COLOR.white,
    paddingTop: 0,
    paddingBottom: 40,
  },
  // En-tête de chaque page
  pageHeader: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLOR.primary900,
    padding: "12 24",
    marginBottom: 24,
  },
  pageHeaderLogo: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: COLOR.primary700,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  pageHeaderLogoText: { color: COLOR.white, fontSize: 10, fontFamily: "Helvetica-Bold" },
  pageHeaderTitle: { color: COLOR.primary300, fontSize: 9 },
  // Pied de page
  footer: {
    position: "absolute",
    bottom: 16,
    left: 24,
    right: 24,
    flexDirection: "row",
    justifyContent: "space-between",
    borderTopWidth: 1,
    borderTopColor: COLOR.neutral100,
    paddingTop: 8,
  },
  footerText: { color: COLOR.neutral600, fontSize: 8 },
  // Page de garde
  coverPage: {
    backgroundColor: COLOR.primary900,
    padding: 0,
    paddingBottom: 0,
  },
  coverContent: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 48,
  },
  coverLogo: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: COLOR.primary700,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 24,
  },
  coverLogoText: { color: COLOR.white, fontSize: 20, fontFamily: "Helvetica-Bold" },
  coverTitle: {
    color: COLOR.white,
    fontSize: 28,
    fontFamily: "Helvetica-Bold",
    textAlign: "center",
    marginBottom: 12,
  },
  coverSubtitle: {
    color: COLOR.primary300,
    fontSize: 13,
    textAlign: "center",
    marginBottom: 32,
  },
  coverTagline: {
    color: COLOR.primary300,
    fontSize: 11,
    fontFamily: "Helvetica-Oblique",
    textAlign: "center",
  },
  coverDate: {
    color: COLOR.neutral600,
    fontSize: 9,
    textAlign: "center",
    marginTop: 48,
  },
  // Corps
  body: { paddingHorizontal: 32 },
  sectionTitle: {
    fontSize: 16,
    fontFamily: "Helvetica-Bold",
    color: COLOR.primary900,
    marginBottom: 12,
    borderBottomWidth: 2,
    borderBottomColor: COLOR.primary700,
    paddingBottom: 6,
  },
  paragraph: { fontSize: 10, color: COLOR.neutral800, lineHeight: 1.6, marginBottom: 12 },
  // Chiffres clés
  statsRow: { flexDirection: "row", gap: 12, marginBottom: 20 },
  statBox: {
    flex: 1,
    backgroundColor: COLOR.primary50,
    borderRadius: 8,
    padding: 14,
    alignItems: "center",
    borderWidth: 1,
    borderColor: COLOR.primary300,
  },
  statValue: { fontSize: 22, fontFamily: "Helvetica-Bold", color: COLOR.primary700, marginBottom: 4 },
  statLabel: { fontSize: 8, color: COLOR.neutral600, textAlign: "center" },
  // Blockquote
  blockquote: {
    backgroundColor: COLOR.primary50,
    borderLeftWidth: 4,
    borderLeftColor: COLOR.primary700,
    padding: 12,
    marginBottom: 12,
    borderRadius: 4,
  },
  blockquoteText: {
    fontSize: 11,
    fontFamily: "Helvetica-Oblique",
    color: COLOR.primary900,
    marginBottom: 6,
  },
  blockquoteSubtext: { fontSize: 9, color: COLOR.neutral600, lineHeight: 1.5 },
  // Tags engagements
  tagsRow: { flexDirection: "row", flexWrap: "wrap", gap: 6, marginBottom: 16 },
  tag: {
    backgroundColor: COLOR.primary50,
    borderWidth: 1,
    borderColor: COLOR.primary300,
    borderRadius: 12,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  tagText: { fontSize: 9, color: COLOR.primary700 },
  // Programmes
  programRow: { flexDirection: "row", gap: 12, marginBottom: 16 },
  programCard: {
    flex: 1,
    backgroundColor: COLOR.earth100,
    borderRadius: 8,
    padding: 12,
    borderLeftWidth: 3,
    borderLeftColor: COLOR.earth500,
  },
  programSigle: { fontSize: 14, fontFamily: "Helvetica-Bold", color: COLOR.primary700, marginBottom: 4 },
  programTitle: { fontSize: 9, fontFamily: "Helvetica-Bold", color: COLOR.neutral800, marginBottom: 6 },
  programDesc: { fontSize: 8, color: COLOR.neutral600, lineHeight: 1.5 },
});

const TODAY = new Date().toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" });

function PageHeader({ section }: { section: string }) {
  return (
    <View style={styles.pageHeader} fixed>
      <View style={styles.pageHeaderLogo}>
        <Text style={styles.pageHeaderLogoText}>NSS</Text>
      </View>
      <Text style={styles.pageHeaderTitle}>{section}</Text>
    </View>
  );
}

function PageFooter() {
  return (
    <View style={styles.footer} fixed>
      <Text style={styles.footerText}>NSS — wasafrica.org — {TODAY}</Text>
      <Text style={styles.footerText} render={({ pageNumber, totalPages }) =>
        `${pageNumber} / ${totalPages}`
      } />
    </View>
  );
}

export default function NSS_PresentationDoc() {
  return (
    <Document
      title="NSS — Présentation du mouvement"
      author="Nous Sommes la Solution"
      subject="Mouvement panafricain de femmes rurales"
    >
      {/* Page de garde */}
      <Page size="A4" style={[styles.page, styles.coverPage]}>
        <View style={styles.coverContent}>
          <View style={styles.coverLogo}>
            <Text style={styles.coverLogoText}>NSS</Text>
          </View>
          <Text style={styles.coverTitle}>Nous Sommes la Solution</Text>
          <Text style={styles.coverSubtitle}>
            Mouvement panafricain de femmes rurales{"\n"}
            pour la souveraineté alimentaire
          </Text>
          <Text style={styles.coverTagline}>
            « Par nous-mêmes. Pour nous-mêmes. En nous-mêmes. »
          </Text>
          <Text style={styles.coverDate}>Document généré le {TODAY} — wasafrica.org</Text>
        </View>
      </Page>

      {/* Page 2 — Chiffres + Mission */}
      <Page size="A4" style={styles.page}>
        <PageHeader section="Qui sommes-nous ?" />
        <View style={styles.body}>

          <Text style={styles.sectionTitle}>NSS en chiffres</Text>
          <View style={styles.statsRow}>
            <View style={styles.statBox}>
              <Text style={styles.statValue}>175 000</Text>
              <Text style={styles.statLabel}>Membres et sympathisant·es</Text>
            </View>
            <View style={styles.statBox}>
              <Text style={styles.statValue}>500+</Text>
              <Text style={styles.statLabel}>Associations de Femmes Rurales</Text>
            </View>
            <View style={styles.statBox}>
              <Text style={styles.statValue}>12</Text>
              <Text style={styles.statLabel}>Organisations fondatrices</Text>
            </View>
            <View style={styles.statBox}>
              <Text style={styles.statValue}>7</Text>
              <Text style={styles.statLabel}>{"Pays d'Afrique de l'Ouest"}</Text>
            </View>
          </View>

          <Text style={styles.sectionTitle}>Notre mission</Text>
          <Text style={styles.paragraph}>
            {"Lancé en 2011 par 12 organisations de femmes rurales, NSS s'est imposé sur le champ des alternatives paysannes durables, économiquement rentables, socialement et écologiquement viables."}
          </Text>

          <Text style={styles.sectionTitle}>Notre vision</Text>
          <Text style={styles.paragraph}>
            {"NSS œuvre pour une Afrique où les femmes rurales, impliquées dans la prise de décision, cultivent, transforment, vendent et consomment les produits de l'agriculture familiale tout en préservant l'environnement."}
          </Text>

          <Text style={styles.sectionTitle}>Nos 7 engagements</Text>
          <View style={styles.tagsRow}>
            {["Souveraineté alimentaire", "Agriculture familiale", "Semences paysannes",
              "Biodiversité", "Agroécologie", "Accès équitable aux ressources",
              "Gouvernance participative"].map((eng) => (
              <View key={eng} style={styles.tag}>
                <Text style={styles.tagText}>{eng}</Text>
              </View>
            ))}
          </View>
        </View>
        <PageFooter />
      </Page>

      {/* Page 3 — Messages + Programmes */}
      <Page size="A4" style={styles.page}>
        <PageHeader section="Messages & Programmes" />
        <View style={styles.body}>

          <Text style={styles.sectionTitle}>Les messages du mouvement</Text>
          {[
            {
              q: "Nous, femmes, nourrissons le monde avec nos bras et nos valeurs.",
              s: "Avec un meilleur accès à l'information, à la formation, à l'investissement et à l'équipement, les femmes rurales sont aptes à nourrir le monde.",
            },
            {
              q: "Produisons ce que nous consommons et consommons ce que nous produisons.",
              s: "Les pays ouest-africains exportent leurs récoltes et importent des aliments plus chers et de moindre qualité. Les coûts pour les familles sont énormes.",
            },
            {
              q: "Préservons la semence paysanne et développons la biodiversité.",
              s: "Les semences paysannes, naturellement adaptées aux changements climatiques, doivent être préservées. Il est inconcevable qu'elles soient privatisées.",
            },
          ].map(({ q, s }) => (
            <View key={q} style={styles.blockquote}>
              <Text style={styles.blockquoteText}>« {q} »</Text>
              <Text style={styles.blockquoteSubtext}>{s}</Text>
            </View>
          ))}

          <Text style={[styles.sectionTitle, { marginTop: 12 }]}>Nos programmes phares</Text>
          <View style={styles.programRow}>
            <View style={styles.programCard}>
              <Text style={styles.programSigle}>CIFAP</Text>
              <Text style={styles.programTitle}>{"Camp International de Formation sur l'Agroécologie Paysanne"}</Text>
              <Text style={styles.programDesc}>
                Organisé chaque année à Niaguis (Casamance, Sénégal), le CIFAP rassemble des femmes
                agricultrices de plusieurs pays pour partager savoirs endogènes, semences paysannes
                et pratiques agroécologiques.
              </Text>
            </View>
            <View style={styles.programCard}>
              <Text style={styles.programSigle}>EMMAP</Text>
              <Text style={styles.programTitle}>{"Engagement des Médias pour les Minorités, l'Agriculture et la Paix"}</Text>
              <Text style={styles.programDesc}>
                EMMAP forme les femmes rurales à produire et diffuser leurs propres contenus médias.
                {"Les agricultrices d'Afrique de l'Ouest doivent être actrices de l'information."}
              </Text>
            </View>
          </View>
        </View>
        <PageFooter />
      </Page>
    </Document>
  );
}
