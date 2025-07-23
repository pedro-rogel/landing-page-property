'use client'
import MainView from "./view";
import MainViewModel from "./viewModel";

export default function Main() {
  const {
    searchTerm,
    setSearchTerm,
    propertyType,
    setPropertyType,
    filteredProperties,
  } = MainViewModel();
  return (
    <MainView
      filteredProperties={filteredProperties}
      propertyType={propertyType}
      searchTerm={searchTerm}
      setPropertyType={setPropertyType}
      setSearchTerm={setSearchTerm}
    />
  );
}
