// NOUVEAU — Mission 4 : Document PDF Galerie Vidéos NSS
"use client";

import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
} from "@react-pdf/renderer";

const COLOR = {
  primary900: "#1b4332",
  primary700: "#2d6a4f",
  primary300: "#74c69d",
  primary50:  "#f0fff4",
  neutral800: "#1f1f1f",
  neutral600: "#4a4a4a",
  neutral100: "#f5f5f5",
  white:      "#ffffff",
};

const styles = StyleSheet.create({
  page: { fontFamily: "Helvetica", backgroundColor: COLOR.white, paddingBottom: 40 },
  header: {
    backgroundColor: COLOR.primary900,
    padding: "12 24",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 24,
  },
  headerLogo: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: COLOR.primary700,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  headerLogoText: { color: COLOR.white, fontSize: 9, fontFamily: "Helvetica-Bold" },
  headerText: { color: COLOR.primary300, fontSize: 9 },
  body: { paddingHorizontal: 32 },
  title: {
    fontSize: 20,
    fontFamily: "Helvetica-Bold",
    color: COLOR.primary900,
    marginBottom: 6,
  },
  subtitle: { fontSize: 11, color: COLOR.neutral600, marginBottom: 20 },
  grid: { flexDirection: "row", flexWrap: "wrap", gap: 12 },
  card: {
    width: "47%",
    backgroundColor: COLOR.primary50,
    borderRadius: 8,
    padding: 12,
    borderLeftWidth: 3,
    borderLeftColor: COLOR.primary700,
    marginBottom: 12,
  },
  cardThumb: {
    height: 60,
    backgroundColor: COLOR.primary700,
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 8,
  },
  cardThumbText: { color: COLOR.white, fontSize: 18 },
  cardCat: { fontSize: 8, color: COLOR.primary700, marginBottom: 4, fontFamily: "Helvetica-Bold" },
  cardTitle: { fontSize: 9, color: COLOR.neutral800, lineHeight: 1.4, marginBottom: 4 },
  cardDuration: { fontSize: 8, color: COLOR.neutral600 },
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
});

const TODAY = new Date().toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" });

const VIDEOS = [
  { id: "boT5gIW072Q", titre: "30 Min avec Mariama Sonko : Écoféminisme et Agroécologie", duree: "28:47", cat: "Agroécologie" },
  { id: "LGkcZMWNgZA", titre: "Journal TV 20h – 1er septembre 2025", duree: "04:32", cat: "Médias" },
  { id: "FothaoeQsQ8", titre: "Au Sénégal : Le Combat des Agricultrices pour l'Accès à la Propriété", duree: "12:15", cat: "Agroécologie" },
  { id: "Bj5Z013_iQU", titre: "NSS à Pescara – Journée Mondiale de l'Eau (1/3)", duree: "08:10", cat: "Événements" },
  { id: "_3_fEjTOi3I", titre: "NSS à Pescara – Journée Mondiale de l'Eau (2/3)", duree: "07:55", cat: "Événements" },
  { id: "psKIMgwaV7Y", titre: "NSS à Pescara – Journée Mondiale de l'Eau (3/3)", duree: "06:30", cat: "Événements" },
];

export default function NSS_VideosDoc() {
  return (
    <Document title="NSS — Galerie Vidéos" author="Nous Sommes la Solution">
      <Page size="A4" style={styles.page}>
        <View style={styles.header} fixed>
          <View style={styles.headerLogo}>
            <Text style={styles.headerLogoText}>NSS</Text>
          </View>
          <Text style={styles.headerText}>Galerie Vidéos — wasafrica.org</Text>
        </View>

        <View style={styles.body}>
          <Text style={styles.title}>Médiathèque NSS</Text>
          <Text style={styles.subtitle}>
            Témoignages, formations et actions sur le terrain — {TODAY}
          </Text>

          <View style={styles.grid}>
            {VIDEOS.map((v) => (
              <View key={v.id} style={styles.card}>
                <View style={styles.cardThumb}>
                  <Text style={styles.cardThumbText}>▶</Text>
                </View>
                <Text style={styles.cardCat}>{v.cat}</Text>
                <Text style={styles.cardTitle}>{v.titre}</Text>
                <Text style={styles.cardDuration}>{v.duree}</Text>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.footer} fixed>
          <Text style={styles.footerText}>NSS — wasafrica.org — {TODAY}</Text>
          <Text style={styles.footerText} render={({ pageNumber, totalPages }) =>
            `${pageNumber} / ${totalPages}`
          } />
        </View>
      </Page>
    </Document>
  );
}
